import React from 'react'
import projects from '../projects'

const Work = () => {
  return (
    <div id="work" className="section">
      <h2>
        <span className="font-mono text-accent">02.</span> Some Things I have Built
      </h2>
      <div className="cards">

        {projects.map(project => (
          <div key={project.title} target="_blank" href={project.prev} className="card text-gray-400">
            <img className='thumbnail' src={project.img} alt="Expense Tracker" />
            <h4 className='card-header'>{project.title}</h4>
            <p className='text-sm'>{project.detail}</p>
            
            <div className="links flex justify-between relative ">
              <a target="_blank" className='hover:underline hover:text-gray-300' href={project.repo}>Github ↗</a>
              <a target="_blank" className='hover:underline hover:text-gray-300' href={project.prev}>Preview ↗</a>
            </div>
          </div>
        ))}
      </div>
      <a href="github.com/urwah1248"><button className='font-mono block mx-auto mt-5 text-accent border-2 border-accent hover:bg-accent hover:text-black h-8 px-4 rounded-md leading-none transition-[250ms]'>View More on Github</button></a>
    </div>
  )
}

export default Work