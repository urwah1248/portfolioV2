import React from "react";
import projects from "@/projects";
import Image from "next/image";

const Work = () => {
  const importedProjects = typeof window !== "undefined" ? projects : ["none"];
  return (
    <div id="work" className="section flex flex-col">
      <h2
        className="wow animate fadeInUp"
        data-wow-delay="200ms"
        data-wow-duration="500ms"
      >
        <span className="font-mono text-accent">02.</span> Some of my Work
      </h2>
      <div className="cards">
        {projects.map((project, index) => (
          <div
            key={project.title}
            rel="noreferrer"
            className="card text-gray-400 wow animate fadeInUp"
            data-wow-delay={index * 100 + "ms"}
            data-wow-duration="500ms"
          >
            {/* <img className='thumbnail' src={project.img} alt="Expense Tracker" /> */}
            <Image
              width={400}
              height={0}
              className="thumbnail"
              src={project.img}
              alt={`Image of ${project.title}`}
            />
            <h4 className="card-header">{project.title}</h4>
            <p className="text-sm">{project.detail}</p>

            <div className="links flex justify-between relative ">
              {project.prev && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline hover:text-gray-300"
                  href={project.prev}
                >
                  Preview ↗
                </a>
              )}
              {project.repo && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline hover:text-gray-300"
                  href={project.repo}
                >
                  Github ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://github.com/urwah1248"
        target="_blank"
        rel="noreferrer"
        className="wow animate fadeInUp"
        data-wow-delay="100ms"
        data-wow-duration="500ms"
      >
        <button className="font-mono block mx-auto mt-5 text-accent border-2 border-accent hover:bg-accent hover:text-black h-8 px-4 rounded-md leading-none transition-[250ms]">
          View More on Github
        </button>
      </a>
    </div>
  );
};

export default Work;
