import type { SystemStyleObject } from '@chakra-ui/react'
import { Box, Flex, Heading, Spinner, Text } from '@chakra-ui/react'

import type { Option } from '@/lib/types'

const cardProps: SystemStyleObject = {
  width: '100%',
  minH: '100%',
  padding: '16px',
  borderRadius: '8px',
  justifyContent: 'space-between',
  alignItems: 'center',
}

interface CardInfoProps {
  title: string
  value: Option<string>
  isLoading: boolean
}

export const CardInfo = ({ title, value, isLoading }: CardInfoProps) => (
  <Flex sx={cardProps} transition="all 0.25s ease-in-out" bg="gray.700">
    <Box>
      <Flex alignItems="center" gap={1} mb={2}>
        <Text variant="body2" color="text.dark">
          {title}
        </Text>
      </Flex>
      {isLoading ? (
        <Spinner size="md" />
      ) : (
        <Heading as="h5" variant="h5">
          {value ?? 'N/A'}
        </Heading>
      )}
    </Box>
  </Flex>
)
