import React from 'react'
import {useState, useEffect} from 'react'
import logo from '../media/portfoliologo.png'


const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)

  useEffect( () => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
  
      if(currentScrollPos > prevScrollPos){
          setVisible(false)
      }else{
          setVisible(true)
      }
  
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  return (
    <nav className={`backdrop-blur-md fixed h-[80px] inset-0 flex justify-center md:justify-between md:p-[20px] w-full transition-['250ms'] ${visible ? '' : 'top-[-100px]'}`}>
      <div className="logo my-auto">
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
      
    </nav>
  );
}

export default Header