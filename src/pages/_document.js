import { Html, Head, Main, NextScript } from 'next/document'
import Sidebars from '@/components/Sidebars'

export default function Document() {

  return (
    <Html lang="en">
        <Head />
      <body className='App bg-bg py-1'>
        <Main />
        <Sidebars/>
        <NextScript />
      </body>
    </Html>
  )
}
