import { ChainCurrency, ChainInfo, ChainType } from '@/lib/types'

const BSC: ChainCurrency = {
  name: 'tBNB',
  symbol: 'tBNB',
  decimals: 18,
}

export const bscTestnet: ChainInfo = {
  name: 'BNB Smart Chain Testnet',
  type: ChainType.Testnet,
  chainId: '0x61',
  rpcUrls: ['https://bsc-testnet-rpc.publicnode.com'],
  chainName: 'BNB Smart Chain',
  nativeCurrency: BSC,
  blockExplorerUrls: ['https://testnet.bscscan.com/'],
}
