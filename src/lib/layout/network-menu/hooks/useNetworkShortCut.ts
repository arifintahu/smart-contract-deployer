import { useEffect } from 'react'

export const useNetworkShortCut = (onToggle: () => void) => {
  useEffect(() => {
    const openSearchHandler = (event: KeyboardEvent) => {
      const specialKey = event.ctrlKey
      if (event.key === `/` && specialKey) {
        event.preventDefault()
        onToggle()
      }
    }
    document.addEventListener('keydown', openSearchHandler)

    return () => document.removeEventListener('keydown', openSearchHandler)
  }, [onToggle])
}
