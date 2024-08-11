import { Flex, Heading, Kbd, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import type { KeyboardEvent as ReactKeyboardEvent } from 'react'

import InputWithIcon from '@/lib/components/InputWithIcon'

interface NetworkMenuTopProps {
  keyword: string
  setKeyword: (value: string) => void
  handleOnKeyDown: (e: ReactKeyboardEvent<HTMLDivElement>) => void
  onClose: () => void
}

export const NetworkMenuTop = observer(
  ({ keyword, setKeyword, handleOnKeyDown }: NetworkMenuTopProps) => {
    return (
      <Flex direction="column" gap={4} width="100%">
        <Flex direction="column" gap={1}>
          <Flex alignItems="center" gap={2}>
            <Heading fontSize={'large'}>Select Network</Heading>
            <Flex gap={1}>
              <Kbd size="sm">
                <Text variant="body3" gap={1}>
                  "Ctrl"
                </Text>
              </Kbd>
              <Kbd>
                <Text variant="body3" gap={1}>
                  /
                </Text>
              </Kbd>
            </Flex>
          </Flex>
        </Flex>
        <InputWithIcon
          placeholder="Search by Name or Chain ID"
          size="md"
          value={keyword}
          onChange={(e: any) => setKeyword(e.target.value)}
          onKeyDown={handleOnKeyDown}
          amptrackSection="network-search"
        />
      </Flex>
    )
  }
)
