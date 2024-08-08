import { Flex, Text } from '@chakra-ui/react'

import { AppLink } from '@/lib/components/AppLink'
import { CustomIcon } from '@/lib/components/icon'
import { useIsCurrentPage } from '@/lib/hooks'
import { getSubHeader } from './utils'

const ACTIVE_COLOR = 'accent.main'

const SubHeader = () => {
  const isCurrentPage = useIsCurrentPage()

  return (
    <Flex px={6} h="full">
      {getSubHeader().map((item) => (
        <AppLink href={item.slug} key={item.slug}>
          <Flex
            alignItems="center"
            px={4}
            gap={2}
            h="full"
            borderBottomWidth={2}
            borderColor={
              isCurrentPage(item.slug) ? ACTIVE_COLOR : 'transparent'
            }
            transition="all 0.25s ease-in-out"
            _hover={{ borderColor: ACTIVE_COLOR }}
            sx={{
              _hover: {
                '> svg, > p': {
                  color: ACTIVE_COLOR,
                  transition: 'all .25s ease-in-out',
                },
                borderBottomWidth: 2,
                borderColor: ACTIVE_COLOR,
              },
            }}
          >
            <CustomIcon
              boxSize={3}
              name={item.icon}
              color={isCurrentPage(item.slug) ? ACTIVE_COLOR : 'gray.600'}
            />
            <Text
              variant="body2"
              fontWeight={700}
              color={isCurrentPage(item.slug) ? ACTIVE_COLOR : 'text.dark'}
            >
              {item.name}
            </Text>
          </Flex>
        </AppLink>
      ))}
    </Flex>
  )
}

export default SubHeader
