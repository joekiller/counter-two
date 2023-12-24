import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        strategy="lazyOnload"
        id="adsbygoogle-init"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5540599912148197"
        crossOrigin="anonymous"
      />
    </>
  )
}

export default MyApp
