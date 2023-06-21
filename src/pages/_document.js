import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebars from '@/components/Sidebars'

export default function Document() {

  return (
    <Html lang="en">
        <Head />
      <body className='App bg-bg py-1'>
        <Header/>
        <Main />
        <Footer/>
        <Sidebars/>
        <NextScript />
      </body>
    </Html>
  )
}
