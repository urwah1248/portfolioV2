'use client'

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import logo from '@/media/portfoliologo.png';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed z-10 px-4 bg-slate-800 md:bg-transparent md:backdrop-blur-md h-[80px] inset-0 flex items-center justify-between md:p-[20px] w-full md:w-full transition-['250ms'] ${visible ? '' : !isMobileMenuOpen&&'top-[-100px]'}`}>
      <button
        className="md:hidden flex items-center text-gray-300 hover:text-accent focus:outline-none z-10"
        onClick={toggleMobileMenu}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="logo md:ml-5 pl-10 md:mx-0 md:pl-0 z-10">
        <a href="#welcome" onClick={() => {setVisible(false); setIsMobileMenuOpen(false)}}>
          <Image
            src={logo}
            width={120}
            height={0}
            className="h-[40px] w-auto my-[5px] ml-[5px] hover:cursor-pointer md:hover:scale-[150%] transition-[250ms]"
            alt="logo"
          />
        </a>
      </div>
      <div className="flex md:mr-8 items-center">
        <ul className={`bg-slate-800 md:bg-transparent backdrop-blur-md p-4 transition-[100ms] absolute z-0 flex flex-col left-0 w-screen md:p-0 md:static md:w-auto md:flex md:flex-row md:space-x-12 md:mr-10 text-gray-300 font-mono ${isMobileMenuOpen ? ' top-20' : 'top-[-200px] bg-transparent'}`}>
          <li onClick={() => {setVisible(false); setIsMobileMenuOpen(false)}}>
            <a href="#about" className="hover:text-accent active:text-accent block w-full py-4 md:p-0 border-2 md:border-0 border-x-0 border-gray-600">
              <span className="text-accent">01.</span> About
            </a>
          </li>
          <li onClick={() => {setVisible(false); setIsMobileMenuOpen(false)}}>
            <a href="#work" className="hover:text-accent active:text-accent block w-full py-4 md:p-0 md:border-0 border-x-0 border-gray-600">
              <span className="text-accent">02.</span> Work
            </a>
          </li>
          <li onClick={() => {setVisible(false); setIsMobileMenuOpen(false)}}>
            <a href="#contact" className="hover:text-accent active:text-accent block w-full py-4 md:p-0 border-2 md:border-0 border-x-0 border-gray-600">
              <span className="text-accent">03.</span> Contact
            </a>
          </li>
        </ul>
        <div className='z-10'>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://urwah1248.github.io/urwah1248/resume.pdf"
          >
            <button className="text-accent border-2 border-accent hover:bg-accent hover:text-black h-8 px-4 rounded-md leading-none transition-[250ms]">
              Resume
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
