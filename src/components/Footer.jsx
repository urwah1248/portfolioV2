import React from 'react'
import IconGitHub from '../icons/Github'
import IconLinkedin from '../icons/Linkedin'
import IconTwitter from '../icons/Twitter'

const Footer = () => {
  return (
    <div>
      <div className="hidden left-fixedbar md:block fixed w-6 h-[400px] bottom-0 left-5">
        <div className="icons flex flex-col gap-4">
          <IconGitHub/>
          <IconLinkedin/>
          <IconTwitter/>
          <div className='h-[300px] w-1 bg-gray-400 mx-auto'></div>
        </div>
      </div>

      <div className="hidden left-fixedbar md:block fixed w-6 h-[400px] bottom-0 right-5">
        <div className="flex flex-col gap-4">
            <a className='iconhover mb-[164px] rotate-90 text-gray-400 font-mono' href='mailto:urwahpatel@gmail.com'>urwahpatel@gmail.com</a>
        </div>
        <div className='relative w-1 h-80 bg-gray-400 mx-auto'></div>
        
      </div>

      <div className="md:hidden links flex flex-row w-1/2 mx-auto justify-evenly h-8 my-5">
          <IconGitHub/>
          <IconLinkedin/>
          <IconTwitter/>
      </div>

      <p className='font-mono text-center text-gray-500'>All rights reserved. Created by Muhammad Urwah</p>
    </div>
  )
}

export default Footer