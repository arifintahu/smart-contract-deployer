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
