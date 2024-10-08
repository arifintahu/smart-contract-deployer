import { ChainCurrency } from '@/lib/types'

export function hexToBigInt(hex: string): bigint {
  return BigInt(hex)
}

export function displayBalance(
  balance: number,
  currency: ChainCurrency,
  maxDecimals: number = 4
): string {
  const decimalPlaces = Math.pow(10, maxDecimals)
  const value =
    Math.round((balance / Math.pow(10, currency.decimals)) * decimalPlaces) /
    decimalPlaces
  return `${value} ${currency.symbol}`
}

export function displayWeiToGwei(wei: number): string {
  const gwei = 10 ** 9
  const value = Number(wei / gwei).toFixed(2)
  return `${value} gwei`
}

export function gweiToWei(gwei: number): bigint {
  // 1 Gwei = 10^9 Wei
  const weiPerGwei = 1_000_000_000
  return BigInt(gwei * weiPerGwei)
}
