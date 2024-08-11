import { useQuery } from '@tanstack/react-query'
import { fetchBalance } from '@/lib/api'

export function useBalance(address?: string) {
  return useQuery({
    queryKey: ['balance', address],
    queryFn: () => fetchBalance(address),
    enabled: !!address,
  })
}
