import { useQuery } from '@tanstack/react-query'
import { fetchBalance, fetchBlockNumber, fetchGasPrice } from '@/lib/api'
import Web3 from 'web3'

export function useBalance(web3?: Web3, address?: string) {
  return useQuery({
    queryKey: ['balance', address],
    queryFn: () => fetchBalance(web3, address),
    enabled: !!web3 && !!address,
  })
}

export function useBlockNumber(web3?: Web3) {
  return useQuery({
    queryKey: ['blockNumber'],
    queryFn: () => fetchBlockNumber(web3),
    enabled: !!web3,
  })
}

export function useGasPrice(web3?: Web3) {
  return useQuery({
    queryKey: ['gasPrice'],
    queryFn: () => fetchGasPrice(web3),
    enabled: !!web3,
  })
}
