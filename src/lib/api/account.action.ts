import { throwError } from '@/lib/utils'
import Web3 from 'web3'

export async function fetchBalance(
  web3?: Web3,
  address?: string
): Promise<number> {
  if (!web3) throwError('Wallet is not connected')
  if (!address) throwError('Address is required')
  try {
    const result = await web3.eth.getBalance(address)
    return Number(result)
  } catch (error) {
    throwError(error)
  }
}
