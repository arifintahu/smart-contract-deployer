import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'

import { useNetworkSelector, useNetworkShortCut } from './hooks'
import { NetworkButton } from './NetworkButton'
import { NetworkMenuBody } from './NetworkMenuBody'
import { NetworkMenuTop } from './NetworkMenuTop'

export const NetworkMenu = observer(() => {
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure()

  const {
    keyword,
    setKeyword,
    handleOnKeyDown,
    cursor,
    setCursor,
    filteredMainnetChains,
    filteredTestnetChains,
    filteredLocalChains,
  } = useNetworkSelector(onClose)

  useNetworkShortCut(onToggle)

  return (
    <>
      <NetworkButton
        onClick={() => {
          onOpen()
        }}
        isMobile={false}
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        autoFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent h="100%" background="gray.800" minW="343px" gap={6}>
          <DrawerHeader px={4} pt={6} pb={0}>
            <NetworkMenuTop
              keyword={keyword}
              setKeyword={setKeyword}
              handleOnKeyDown={handleOnKeyDown}
              onClose={onClose}
            />
          </DrawerHeader>
          <DrawerCloseButton color="text.dark" />
          <DrawerBody px={4} pt={0} pb={6}>
            <NetworkMenuBody
              cursor={cursor}
              setCursor={setCursor}
              filteredMainnetChains={filteredMainnetChains}
              filteredTestnetChains={filteredTestnetChains}
              filteredLocalChains={filteredLocalChains}
              onClose={onClose}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
})
