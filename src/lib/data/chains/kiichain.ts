import { ChainCurrency, ChainInfo, ChainType } from '@/lib/types'

const KII: ChainCurrency = {
  name: 'KII',
  symbol: 'KII',
  decimals: 18,
}

export const kiiTestnet: ChainInfo = {
  name: 'Kiichain Testnet',
  type: ChainType.Testnet,
  chainId: '0x75bc371',
  rpcUrls: ['https://a.sentry.testnet.kiivalidator.com:8645'],
  chainName: 'Kiichain',
  nativeCurrency: KII,
  blockExplorerUrls: ['https://app.kiiglobal.io/kiichain'],
}
