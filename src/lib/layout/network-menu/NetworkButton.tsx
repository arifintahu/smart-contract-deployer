import { Flex, Text } from '@chakra-ui/react'

import { CustomIcon } from '@/lib/components/icon'
import { Chain } from '@/lib/store/chain.store'
import { useSnapshot } from 'valtio'
import { useEffect, useState } from 'react'

interface NetworkButtonProps {
  isMobile: boolean
  onClick: () => void
}

export const NetworkButton = ({ isMobile, onClick }: NetworkButtonProps) => {
  const { active } = useSnapshot(Chain)

  // prevent hydration error
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const width = isMobile ? '220px' : '170px'
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      px={4}
      py={2}
      h="full"
      _hover={{ bg: 'gray.900', cursor: 'pointer' }}
      transition="all 0.25s ease-in-out"
      w={width}
      borderRadius={isMobile ? '8px' : 0}
      borderWidth={isMobile ? '1px' : 0}
      borderColor={isMobile ? 'gray.700' : 'transparent'}
      onClick={onClick}
    >
      <Text
        textOverflow="ellipsis"
        variant="body2"
        overflow="hidden"
        whiteSpace="nowrap"
        maxW={width}
      >
        {isClient ? active.name : ''}
      </Text>
      <CustomIcon name="chevron-down" color="gray.600" />
    </Flex>
  )
}
