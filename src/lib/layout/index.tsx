import { Grid, GridItem } from '@chakra-ui/react'
import { ReactNode, useEffect, useMemo } from 'react'
import { useNavContext } from '@/lib/app-provider'
import Header from './Header'
import SubHeader from './subheader'
import Footer from './Footer'
import Navbar from './navbar'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { isExpand, setIsExpand } = useNavContext()

  const defaultRow = '64px 48px 1fr'
  const mode = useMemo(() => {
    return {
      templateAreas: `"header header""subheader subheader""nav main"`,
      templateRows: defaultRow,
      templateCols: isExpand ? '235px 1fr' : '48px 1fr',
      header: <Header />,
      subHeader: <SubHeader />,
    }
  }, [isExpand])

  return (
    <Grid
      templateAreas={mode.templateAreas}
      gridTemplateRows={mode.templateRows}
      gridTemplateColumns={mode.templateCols}
      h="100vh"
      overflowX="hidden"
      overflowY="scroll"
      bg="background.main"
    >
      <GridItem borderBottom="1px solid" borderColor="gray.700" area="header">
        {mode.header}
      </GridItem>
      <GridItem
        borderBottom="1px solid"
        borderColor="gray.700"
        area="subheader"
        py={{ base: 2, md: 0 }}
        px={{ base: 4, md: 0 }}
      >
        {mode.subHeader}
      </GridItem>
      <GridItem
        borderRight="1px solid"
        borderColor="gray.700"
        area="nav"
        overflowY="auto"
      >
        <Navbar isExpand={isExpand} setIsExpand={setIsExpand} />
      </GridItem>
      <GridItem area="main" overflowX="hidden" id="content">
        <div style={{ minHeight: 'calc(100vh - 129px)', position: 'relative' }}>
          {children}
        </div>
        <Footer />
      </GridItem>
    </Grid>
  )
}

export default Layout
