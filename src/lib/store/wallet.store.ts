import { MetaMaskInpageProvider } from '@metamask/providers'
import { proxy, ref, snapshot } from 'valtio'
import Web3 from 'web3'
import { hexToBigInt, logError, throwError } from '@/lib/utils'
import { ChainInfo, WalletStatus } from '@/lib/types'
import { Chain } from './chain.store'

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider
  }
}

type WalletStore = {
  address?: string
  status: WalletStatus
  web3?: Web3 | undefined
}

export const Wallet = proxy<WalletStore>({
  status: WalletStatus.Disconnected,
})

export async function bootstrapWallet() {
  const provider = window.ethereum
  if (!provider) {
    Wallet.status = WalletStatus.NotExist
    throwError('Wallet is not installed')
  }

  if (Wallet.status === WalletStatus.Disconnected) {
    Wallet.status = WalletStatus.Connecting
  }

  try {
    Wallet.web3 = ref(new Web3(provider))

    await switchNetwork(Chain.active)

    await Wallet.web3.currentProvider?.request({
      method: 'eth_requestAccounts',
    })
    document.getElementById('requestAccounts')?.remove()

    // get list of accounts
    const allAccounts = await Wallet.web3.eth.getAccounts()

    Wallet.address = allAccounts[0]

    Wallet.status = WalletStatus.Connected
  } catch (error) {
    Wallet.status = WalletStatus.Rejected
    logError(error)
  }
}

export async function switchNetwork(newChain: ChainInfo) {
  try {
    if (Wallet.web3) {
      const chainId = await Wallet.web3.eth.getChainId()
      if (chainId === hexToBigInt(newChain.chainId)) {
        return
      }

      await Wallet.web3.currentProvider?.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: newChain.chainId }],
      })
    } else {
      throwError('Web3 is not initialized')
    }
  } catch (error: any) {
    if (error.code === 4902) {
      try {
        await Wallet.web3?.currentProvider?.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: newChain.chainId,
              chainName: newChain.name,
              nativeCurrency: newChain.nativeCurrency,
              rpcUrls: newChain.rpcUrls,
              blockExplorerUrls: newChain.blockExplorerUrls,
            },
          ],
        })
      } catch (error) {
        logError(error)
      }
    }
    logError(error)
  }

  const provider = window.ethereum
  if (!provider) {
    Wallet.status = WalletStatus.NotExist
    throwError('Wallet is not installed')
  }

  Wallet.web3 = ref(new Web3(provider))
  Chain.active = newChain
}
