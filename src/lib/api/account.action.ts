import { throwError } from '@/lib/utils'
import { Wallet } from '@/lib/store/wallet.store'

export async function fetchBalance(address?: string): Promise<number> {
  if (!address) throwError('Address is required')
  try {
    if (Wallet.web3) {
      const result = await Wallet.web3.eth.getBalance(address)
      return Number(result)
    } else {
      throwError('Wallet is not connected')
    }
  } catch (error) {
    throwError(error)
  }
}
