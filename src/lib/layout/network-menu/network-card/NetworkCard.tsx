import { Box, Flex, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useCallback } from 'react'

import { NetworkImage } from '../NetworkImage'
import type { Option } from '@/lib/types'

import { useSnapshot } from 'valtio'
import { Chain, setActiveChain } from '@/lib/store/chain.store'

interface NetworkCardProps {
  chainId: string
  chainName?: string
  index?: number
  cursor: Option<number>
  setCursor: (index: Option<number>) => void
  onClose: () => void
  isDraggable?: boolean
}

const getCardBackground = (
  index?: number,
  cursor?: Option<number>,
  isSelected?: boolean
) => {
  if (index === cursor) {
    return 'gray.800'
  }
  if (isSelected) {
    return 'gray.700'
  }
  return 'transparent'
}

const getDisplayCursor = (isDraggable: boolean, isSelected: boolean) => {
  if (isDraggable) {
    return 'inherit'
  }
  if (isSelected) {
    return 'default'
  }
  return 'pointer'
}

export const NetworkCard = observer(
  ({
    chainId,
    chainName,
    index,
    cursor,
    setCursor,
    onClose,
    isDraggable = false,
  }: NetworkCardProps) => {
    const { active } = useSnapshot(Chain)

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        setActiveChain(chainId)
        onClose()
      },
      [setActiveChain, chainId, onClose]
    )

    const isSelected = chainId === active?.chainId
    return (
      <Flex
        id={`item-${index}`}
        position="relative"
        justifyContent="space-between"
        alignItems="center"
        px={4}
        py={2}
        gap={4}
        borderRadius={8}
        transition="all 0.25s ease-in-out"
        onClick={handleClick}
        background={getCardBackground(index, cursor, isSelected)}
        cursor={getDisplayCursor(isDraggable, isSelected)}
        onMouseMove={() => index !== cursor && setCursor(index)}
        _hover={{
          background: isSelected ? 'gray.700' : 'gray.800',
          '> .icon-wrapper > .icon-container': {
            opacity: 1,
          },
        }}
      >
        <Box
          opacity={isSelected ? 1 : 0}
          width="4px"
          height="60%"
          bgColor="primary.main"
          position="absolute"
          top="20%"
          borderRadius="2px"
          left="0px"
        />
        <Flex alignItems="center" gap={4}>
          <NetworkImage chainId={chainId} />
          <Flex direction="column">
            <Text variant="body2" fontWeight={600}>
              {chainName}
            </Text>
            {/* <Text color="text.dark" variant="body3">
              {chainName}
            </Text> */}
          </Flex>
        </Flex>
      </Flex>
    )
  }
)
