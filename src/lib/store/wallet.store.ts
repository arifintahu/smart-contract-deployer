import { MetaMaskInpageProvider } from '@metamask/providers'
import { proxy, ref } from 'valtio'
import Web3 from 'web3'
import { logError, throwError } from '@/lib/utils'
import { WalletStatus } from '@/lib/types'

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

    await window.ethereum.request({ method: 'eth_requestAccounts' })
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
