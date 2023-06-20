import pfp from '@/media/profile-pic.png'
import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="section">
      <h2>
        <span className="font-mono text-accent">01.</span> About Me
      </h2>
      
      <div className="all flex flex-col sm:flex-row">
        <div className="left w-full sm:w-1/2">
          <p>
            Greetings, my name is Urwah, and I possess a profound passion
            for crafting digital experiences on the internet. Even in my early years,
            I harbored a curiosity about the inner workings of software and game
            development, driving me to pursue the art of creating them myself. 
            This curiosity materialized as my very first coding endeavor—a blogger blogspot.
          </p>
          <br />
          <p>
            Currently, I am pursuing a software engineering degree at Sindh Madressatul Islam
            University. My primary objective at present is to maintain a steadfast commitment
            to continual learning and honing my skills in website and application development.
          </p>
          <br />
          <p>Here are few of the technologies that I frequently work with:</p>
          <br />
          <div className="flex flex-col text-center mb-5 leading-10 md:flex-row justify-between text-gray-400 font-mono font-bold text-xl">
            <ul>
              <li>HTML, CSS & Javascript</li>
              <li>React</li>
            </ul>
            <ul>
              <li>NextJS</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
        </div>
        <div className="right w-full sm:w-1/2 align-middle">
          <Image src={pfp} alt="Urwah"
          className="w-[50vw] sm:w-[25vw] mx-auto rounded-full md:opacity-50 transition-[250ms] hover:opacity-100 md:hover:scale-[110%] z-0" />
        </div>
      </div>
    </div>
  );
}

export default About