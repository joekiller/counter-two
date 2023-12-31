import '../styles/globals.css'
import type { AppProps } from 'next/app'

// we need this until we get rid of pages to get all the global styles
function PagesApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default PagesApp
