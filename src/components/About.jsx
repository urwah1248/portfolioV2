import pfp from '../media/profile-pic.png'
import React from 'react'

const About = () => {
  return (
    <div id="about" className="section">
      <h2>
        <span className="font-mono text-accent">01.</span> About Me
      </h2>
      
      <div className="all flex flex-col sm:flex-row">
        <div className="left w-full sm:w-1/2">
          <p>
            Hello, My name is Urwah and I enjoy creating things for the
            internet. Even as a child I always wanted to know how are these
            softwares and games are made and wanted to make them myself as well.
            It lead me to my first ever coding problem of creating a blogspot on
            blogger.
          </p>
          <br />
          <p>
            Now, I am a student of software engineering at Sindh Madressatul
            Islam University. My main focus right now is to keep learning and
            building websites and apps.
          </p>
          <br />
          <p>Here are few of the technologies that I frequently work on:</p>
          <br />
          <div className="flex justify-between text-gray-400 font-mono">
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
          <img src={pfp} alt="Urwah" className="w-[50vw] sm:w-[25vw] mx-auto rounded-full md:opacity-50 transition-[250ms] hover:opacity-100 md:hover:scale-[110%] z-0" />
        </div>
      </div>
    </div>
  );
}

export default About