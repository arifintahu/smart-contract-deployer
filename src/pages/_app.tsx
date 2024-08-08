import '@/lib/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { fonts } from '@/lib/styles/theme/fonts'
import { config } from '@/lib/styles/theme/config'
import Layout from '@/lib/layout'

const customTheme = extendTheme({
  fonts,
  config,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
