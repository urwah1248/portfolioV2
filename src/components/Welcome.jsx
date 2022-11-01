import React from 'react'

const Welcome = () => {
  return (
    <div id='welcome' className='section'>
      <h3 className='ml-1'>Hi, my name is</h3>
      <h1 className='title my-[0.5vw] text-gray-300 text-[9vw] font-[helveticabold] md:text-6xl'>Muhammad <span className='text-accent'> Urwah.</span></h1>
      <h1 className='text-gray-400 my-[0.5vw] text-[9vw] font-[helveticabold] md:text-6xl'>Frontend Developer</h1>
      <p className='ml-1 sm:w-1/2'>
        I'm a software engineer specializing in building the frontend of websites and mobile applications. I'm focused towards building beautiful UIs for my apps.
      </p>
      <a href="#about">
        <button className='block text-gray-300 mx-auto border-2 border-bg hover:border-gray-300 rounded-full p-4'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-chevron-double-down" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </a>
    </div>
  )
}

export default Welcome