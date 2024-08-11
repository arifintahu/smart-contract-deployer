import { MetaMaskInpageProvider } from '@metamask/providers'
import { proxy, ref } from 'valtio'
import Web3 from 'web3'
import { hexToBigInt, logError, throwError } from '@/lib/utils'
import { WalletStatus } from '@/lib/types'
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
  const { ethereum } = window
  if (!ethereum) {
    Wallet.status = WalletStatus.NotExist
    throwError('Keplr is not installed')
  }

  if (Wallet.status === WalletStatus.Disconnected) {
    Wallet.status = WalletStatus.Connecting
  }

  try {
    Wallet.web3 = ref(new Web3(ethereum))

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

export async function switchNetwork() {
  try {
    if (Wallet.web3) {
      const chainId = await Wallet.web3.eth.getChainId()
      if (chainId === hexToBigInt(Chain.active.chainId)) {
        return
      }

      await Wallet.web3.currentProvider?.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: Chain.active.chainId }],
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
              chainId: Chain.active.chainId,
              rpcUrls: Chain.active.rpcUrls,
              chainName: Chain.active.name,
              nativeCurrency: Chain.active.nativeCurrency,
              blockExplorerUrls: Chain.active.blockExplorerUrls,
            },
          ],
        })

        return
      } catch (error) {
        logError(error)
      }
    }
    logError(error)
  }
}
