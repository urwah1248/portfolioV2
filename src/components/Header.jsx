import React from 'react'
import logo from '../media/portfoliologo.png'


const Header = () => {
  return (
    <nav className="my-4 h-[60px] md:h-[50px] flex justify-center md:justify-between lg:mx-[5%] md:p-[20px] w-full lg:w-[90%]">
      <div className="logo">
        <a href="#welcome">
          <img src={logo}
            className="h-[40px] my-[5px] ml-[5px] hover:cursor-pointer md:hover:scale-[150%] transition-[250ms]"
            alt="logo"
          />
        </a>
      </div>

      <ul className="hidden md:flex navmenu flex-row justify-evenly text-gray-300 w-1/2 leading-[50px] font-mono">
        <li>
          <a href="#about" className="hover:text-accent active:text-accent">
            01. <span className="text-accent">About</span>
          </a>
        </li>
        <li>
          <a href="#work" className="hover:text-accent active:text-accent">
            02. <span className="text-accent">Work</span>
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-accent active:text-accent">
            03. <span className="text-accent">Contact</span>
          </a>
        </li>
        <li>
          <a target='_blank' rel="noreferrer" href="https://urwah1248.github.io/urwah1248/resume.pdf">
            <button className="text-accent border-2 border-accent hover:bg-accent hover:text-black h-8 px-4 rounded-md leading-none transition-[250ms]">
              Resume
            </button>
          </a>
          
        </li>
      </ul>

      {/* <button className='text-accent md:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" className="text-accent bi bi-list" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>

      <NavMenu/> */}
      
    </nav>
  );
}

export default Header