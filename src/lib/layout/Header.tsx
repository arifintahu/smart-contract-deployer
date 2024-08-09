import { Flex, Image } from '@chakra-ui/react'
import { SectionWrapper } from './SectionWrapper'
import { WalletSection } from '@/lib/components/Wallet'

// import { WalletSection } from "lib/components/Wallet";

const Header = () => {
  return (
    <Flex
      as="header"
      width="100vw"
      height="full"
      align="center"
      justifyContent="space-between"
    >
      <Flex h="full">
        <SectionWrapper minW={'234px'}>
          <Image
            src={'https://neutron.celat.one/celatone.svg'}
            alt="logo"
            minWidth="139px"
            width="139px"
            maxWidth="139px"
            transition="all 0.25s ease-in-out"
            _hover={{ cursor: 'pointer', opacity: 0.85 }}
            mx={4}
          />
        </SectionWrapper>
      </Flex>
      <Flex h="full">
        {/* <SectionWrapper>
          <NetworkMenu />
        </SectionWrapper> */}
        <SectionWrapper>
          <WalletSection />
        </SectionWrapper>
      </Flex>
    </Flex>
  )
}

export default Header
