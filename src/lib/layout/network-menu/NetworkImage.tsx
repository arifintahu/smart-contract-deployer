import { Chain } from '@/lib/store/chain.store'
import { Image, useToken } from '@chakra-ui/react'

import { useSnapshot } from 'valtio'

interface NetworkImageProps {
  chainId: string
}

export const NetworkImage = ({ chainId }: NetworkImageProps) => {
  const { active } = useSnapshot(Chain)
  const [secondaryDarker] = useToken('colors', ['secondary.darker'])

  const image = active?.iconUrl
  const fallbackImage = `https://ui-avatars.com/api/?name=${active.chainName || chainId}&background=${secondaryDarker.replace('#', '')}&color=fff`

  return (
    <Image
      objectFit="cover"
      w={6}
      h={6}
      borderRadius="full"
      src={image || fallbackImage}
      fallbackSrc={fallbackImage}
      fallbackStrategy="onError"
    />
  )
}
