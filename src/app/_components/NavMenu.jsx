import React from 'react'

const navmenu = () => {
  return (
    <div className='md:hidden h-[300px] w-full top-0 fixed bg-bg left-0'>
      <button className={'text-gray-400 relative left-[90%] top-5 active:text-accent'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </button>
        <a href="#about" className='collapse-navlink'>
            <h1 className='text-6xl my-5'><span className='font-mono text-accent'>01</span> About</h1>
        </a>
        <a href="#work" className='collapse-navlink'>
            <h1 className='text-6xl my-5'><span className='font-mono text-accent'>02</span> Work</h1>
        </a>
        <a href="#contact" className='collapse-navlink'>
            <h1 className='text-6xl my-5'><span className='font-mono text-accent'>03</span> Contact</h1>
        </a>
    </div>
  )
}

export default navmenu