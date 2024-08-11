import { Accordion, Divider, Flex, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'

import type { ChainInfo, Option } from '@/lib/types'

import { NetworkAccordion } from './NetworkAccordion'

interface NetworkMenuBodyProps {
  cursor: Option<number>
  setCursor: (cursor: Option<number>) => void
  filteredMainnetChains: ChainInfo[]
  filteredTestnetChains: ChainInfo[]
  filteredLocalChains: ChainInfo[]
  onClose: () => void
}

export const NetworkMenuBody = observer(
  ({
    cursor,
    setCursor,
    filteredMainnetChains,
    filteredTestnetChains,
    filteredLocalChains,
    onClose,
  }: NetworkMenuBodyProps) => {
    return (
      <>
        <Accordion
          variant="transparent"
          allowMultiple
          defaultIndex={[0, 1, 2, 3]}
          p={0}
        >
          <Flex direction="column" gap={4}>
            <NetworkAccordion
              title="Mainnet"
              networks={filteredMainnetChains}
              cursor={cursor}
              setCursor={setCursor}
              startIndex={0}
              onClose={onClose}
            />
            {!!filteredMainnetChains.length && (
              <Divider borderColor="gray.700" />
            )}
            <NetworkAccordion
              title="Testnet"
              networks={filteredTestnetChains}
              cursor={cursor}
              setCursor={setCursor}
              startIndex={filteredMainnetChains.length}
              onClose={onClose}
            />
          </Flex>
        </Accordion>
        {filteredMainnetChains.length +
          filteredTestnetChains.length +
          filteredLocalChains.length ===
          0 && <Text>Empty</Text>}
      </>
    )
  }
)
