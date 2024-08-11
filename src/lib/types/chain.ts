export interface ChainCurrency {
  readonly name: string
  readonly symbol: string
  readonly decimals: number
}

export enum ChainType {
  Local = 'local',
  Testnet = 'testnet',
  Mainnet = 'mainnet',
}

export interface ChainInfo {
  readonly name: string
  readonly type: ChainType
  readonly chainId: string
  readonly rpcUrls: string[]
  readonly chainName: string
  readonly nativeCurrency: ChainCurrency
  readonly blockExplorerUrls?: string[]
  readonly iconUrl?: string
}
