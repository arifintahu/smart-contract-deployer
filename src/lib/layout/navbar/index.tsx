import { Flex } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import type { Dispatch, SetStateAction } from 'react'

import { StorageKeys } from '@/lib/data'
import { useIsCurrentPage } from '@/lib/hooks'

import { CollapseNavMenu } from './Collapse'
import { ExpandNavMenu } from './Expand'
import type { MenuInfo } from './types'
import { IconKeys } from '@/lib/components/icon'

interface NavbarProps {
  isExpand: boolean
  setIsExpand: Dispatch<SetStateAction<boolean>>
}

const Navbar = observer(({ isExpand, setIsExpand }: NavbarProps) => {
  const isCurrentPage = useIsCurrentPage()

  const navMenu: MenuInfo[] = [
    {
      category: 'Developer Tools',
      slug: StorageKeys.DevSidebar,
      submenu: [
        {
          name: 'Deploy Contract',
          slug: '/deploy',
          icon: 'add-new' as IconKeys,
        },
        {
          name: 'Query / Execute',
          slug: '/interact-contract',
          icon: 'query' as IconKeys,
        },
      ],
    },
  ]

  return (
    <Flex direction="column" h="full" overflow="hidden" position="relative">
      {isExpand ? (
        <ExpandNavMenu
          navMenu={navMenu}
          isCurrentPage={isCurrentPage}
          setIsExpand={setIsExpand}
        />
      ) : (
        <CollapseNavMenu
          navMenu={navMenu}
          isCurrentPage={isCurrentPage}
          setIsExpand={setIsExpand}
        />
      )}
    </Flex>
  )
})

export default Navbar
