import Welcome from '@/components/Welcome'
import About from '@/components/About'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import Head from 'next/head'
import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    console.log('useEffect hook is working!');
    // Rest of your effect logic
  }, []);
  return (
    <>
      <Head>
        <title>Portfolio | Muhammad Urwah</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Developer Portfolio of Muhammad Urwah"
        />
        <meta name="twitter:title" content="Portfolio | Muhammad Urwah"/>
        <meta name="twitter:image" content="/portfoliocover.png"/>
        <meta name="twitter:description" content="Frontend Developer portfolio showcasing few projects."/>

        <meta name="og:title" content="Portfolio | Muhammad Urwah"/>
        <meta name="og:image" content="/portfoliocover.png"/>
        <meta name="og:description" content="Frontend Developer portfolio showcasing few projects."/>
      </Head>
      
      <Header/>
      
      <main className='md:mx-[10%] mx-4'>
        <Welcome/>
        <About/>
        <Work/>
        <Contact/>
      </main>

      
      <Footer/>
    </>
  )
}