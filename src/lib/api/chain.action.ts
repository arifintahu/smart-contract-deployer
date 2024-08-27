import { throwError } from '@/lib/utils'
import Web3 from 'web3'

export async function fetchBlockNumber(web3?: Web3): Promise<number> {
  if (!web3) throwError('Wallet is not connected')
  try {
    const result = await web3.eth.getBlockNumber()
    return Number(result)
  } catch (error) {
    throwError(error)
  }
}

export async function fetchGasPrice(web3?: Web3): Promise<number> {
  if (!web3) throwError('Wallet is not connected')
  try {
    const result = await web3.eth.getGasPrice()
    return Number(result)
  } catch (error) {
    throwError(error)
  }
}
