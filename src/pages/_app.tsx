import '@/lib/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { fonts } from '@/lib/styles/theme/fonts'
import { config } from '@/lib/styles/theme/config'
import Layout from '@/lib/layout'
import { NavProvider } from '@/lib/app-provider'

const queryClient = new QueryClient()

const customTheme = extendTheme({
  fonts,
  config,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ChakraProvider theme={customTheme}>
        <NavProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NavProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}
