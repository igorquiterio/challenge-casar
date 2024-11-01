import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Header } from '@/components/Header'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
