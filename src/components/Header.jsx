import React from 'react'
import {useState, useEffect} from 'react'
import logo from '@/media/portfoliologo.png'
import Image from 'next/image'


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
    <nav className={`fixed z-10 backdrop-blur-md h-[80px] inset-0 flex justify-between md:justify-between md:p-[20px] w-full md:w-full transition-['250ms'] ${visible ? '' : 'top-[-100px]'}`}>
      <div className="logo my-auto ml-5">
        <a href="#welcome">
          <Image src={logo}
            width={120}
            height={0}
            className="h-[40px] my-[5px] ml-[5px] hover:cursor-pointer md:hover:scale-[150%] transition-[250ms]"
            alt="logo"
          />
        </a>
      </div>
        
      <a className='md:hidden flex items-center mr-5' target='_blank' rel="noreferrer" href="https://urwah1248.github.io/urwah1248/resume.pdf">
        <button className="font-mono text-accent border-2 border-accent hover:bg-accent hover:text-black h-8 px-4 rounded-md leading-none transition-[250ms]">
          Resume
        </button>
      </a>

      
        <ul className="hidden md:flex navmenu flex-row justify-evenly text-gray-300 w-1/2 leading-[50px] font-mono">
          <li>
            <a href="#about" className="hover:text-accent active:text-accent">
              <span className="text-accent">01.</span> About
            </a>
          </li>
          <li>
            <a href="#work" className="hover:text-accent active:text-accent">
              <span className="text-accent">02.</span> Work
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-accent active:text-accent">
            <span className="text-accent">03.</span> Contact
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