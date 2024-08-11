import { ChainCurrency, ChainInfo, ChainType } from '@/lib/types'

const POLYGON: ChainCurrency = {
  name: 'MATIC',
  symbol: 'MATIC',
  decimals: 18,
}

export const polygonMainnet: ChainInfo = {
  name: 'Polygon Mainnet',
  type: ChainType.Mainnet,
  chainId: '0x89',
  rpcUrls: ['https://polygon-rpc.com/'],
  chainName: 'Polygon',
  nativeCurrency: POLYGON,
  blockExplorerUrls: ['https://polygonscan.com/'],
}
