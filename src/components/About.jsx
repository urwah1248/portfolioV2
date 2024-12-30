import Image from 'next/image';
import React from 'react'
import pfp from '@/media/profile-pic.png'

const About = () => {
  return (
    <div id="about" className="section">
      <h2>
        <span className="font-mono text-accent">01.</span> About Me
      </h2>
      <div className="all flex flex-col md:flex-row-reverse">
        <div className="right w-full md:w-1/2 align-middle mb-10">
          <Image src={pfp} alt="Urwah"
          className="w-[60vw] md:w-[25vw] mx-auto rounded-full md:saturate-0 md:opacity-50 transition-[250ms] hover:saturate-100 hover:opacity-100 z-0" />
        </div>
        <div className="left w-full md:w-1/2">
          <p>
            Greetings, my name is Urwah, and I possess a profound passion
            for crafting digital experiences on the internet. Even in my early years,
            I harbored a curiosity about the inner workings of software and game
            development, driving me to pursue the art of creating them myself. 
            This curiosity materialized as my very first coding endeavor—a blogger blogspot.
          </p>
          <br />
          <p>
            My primary objective at present is to maintain a steadfast commitment
            to continual learning and honing my skills in website and application development.
          </p>
          <br />
          <p>Here are few of the technologies that I frequently work with:</p>
          <br />
          <div className='flex gap-3 flex-wrap'>
            <div className="bg-orange-600 skill">HTML</div>
            <div className="bg-blue-500 skill">CSS</div>
            <div className="bg-yellow-300 skill">JavaScript</div>
            <div className="bg-sky-400 skill">React</div>
            <div className="bg-gray-800 text-gray-300 skill">NextJS</div>
            <div className="bg-cyan-300 skill">TailwindCSS</div>
            <div className="bg-sky-500 skill">TypeScript</div>
            <div className="bg-emerald-500 skill">NodeJS</div>
            <div className="bg-yellow-500 skill">Express</div>
            <div className="bg-green-400 skill ">MongoDB</div>
            <div className="bg-gray-300 skill ">Unity</div>
            <div className="bg-amber-300 skill">SQL</div>
            <div className="bg-orange-400 skill">Firebase</div>
            <div className="bg-sky-500 skill">React Native</div>
            <div className="bg-cyan-600 skill ">PostgreSQL</div>
            <div className="bg-green-400 skill ">Supabase</div>
            <div className="bg-blue-400 skill">Docker</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About