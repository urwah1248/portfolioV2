import React from 'react'
import IconGitHub from '../icons/Github'
import IconLinkedin from '../icons/Linkedin'
import IconTwitter from '../icons/Twitter'

const Footer = () => {
  return (
    <footer>

      <div className='md:hidden links flex flex-row w-2/3 mx-auto justify-evenly h-8 my-5'>
          <a className='w-8' href="https://github.com/urwah1248" target='_blank' rel="noreferrer"><IconGitHub/></a>
          <a className='w-8' href="https://www.linkedin.com/in/muhammad-urwah/" target='_blank' rel="noreferrer"><IconLinkedin/></a>
          <a className='w-8' href="https://twitter.com/shahid_urwah" target='_blank' rel="noreferrer"><IconTwitter/></a>
      </div>
      
      {/* <div className="md:hidden links flex flex-row  w-1/2 mx-auto justify-evenly h-8 my-5">
          <a href="https://github.com/urwah1248" target='_blank' rel="noreferrer"><IconGitHub/></a>
          <a href="https://www.linkedin.com/in/m-urwah-shahid-053a38229/" target='_blank' rel="noreferrer"><IconLinkedin/></a>
          <a href="https://twitter.com/shahid_urwah" target='_blank' rel="noreferrer"><IconTwitter/></a>
      </div> */}

      <p className='font-mono text-center text-gray-500'>All rights reserved. <br className='md:hidden'/> Created by Muhammad Urwah</p>
    </footer>
  )
}

export default Footer