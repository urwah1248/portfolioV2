import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="section h-screen md:h-screen scroll-m-[-50px] my-0 md:my-10">
      <h2>
        <span className="font-mono text-accent">03.</span> Get in touch
      </h2>
      <div className="flex flex-wrap">
        <div className='w-full sm:w-1/2'>
          <p>Feel free to contact me for any inquiries. Whether you have a question or just wanna say hi, I'll try my best to get back to you.</p>
        </div>
        <div className="flex w-full sm:w-1/2 text-center items-center">
          <a href="mailto:urwahpatel@gmail.com" className='block mx-auto'>
            <button className='font-mono my-10 text-accent border-2 border-accent hover:bg-accent hover:text-black h-8 px-4 rounded-md leading-none transition-[250ms]'>Email me</button>
          </a>
        </div>
      </div>
        
    </div>
  )
}

export default Contact