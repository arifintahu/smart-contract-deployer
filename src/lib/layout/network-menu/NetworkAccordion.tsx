import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Heading,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'

import type { ChainInfo, Option } from '@/lib/types'

import { NetworkAccordionSubsection } from './NetworkAccordionSubsection'

interface NetworkAccordionProps {
  title: string
  networks: ChainInfo[]
  cursor: Option<number>
  setCursor: (index: Option<number>) => void
  startIndex: number
  onClose: () => void
}

export const NetworkAccordion = observer(
  ({
    title,
    networks,
    cursor,
    setCursor,
    startIndex,
    onClose,
  }: NetworkAccordionProps) => {
    return (
      <AccordionItem hidden={networks.length === 0}>
        <Flex direction="column" gap={4}>
          <AccordionButton p={4}>
            <Flex justifyContent="space-between" w="full">
              <Heading fontSize={'large'}>{title}</Heading>
              <AccordionIcon color="gray.600" />
            </Flex>
          </AccordionButton>
          <AccordionPanel p={0}>
            <Flex direction="column" gap={4}>
              {networks.length > 0 && (
                <NetworkAccordionSubsection
                  networks={networks}
                  cursor={cursor}
                  setCursor={setCursor}
                  subsectionStartIndex={startIndex}
                  onClose={onClose}
                />
              )}
            </Flex>
          </AccordionPanel>
        </Flex>
      </AccordionItem>
    )
  }
)
