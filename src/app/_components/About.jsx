import Image from "next/image";
import React from "react";
import pfp from "@/media/profile-pic.png";

const About = () => {
  const skills = [
    { name: "HTML", className: "bg-orange-600 skill" },
    { name: "CSS", className: "bg-blue-500 skill" },
    { name: "JavaScript", className: "bg-yellow-300 skill" },
    { name: "React", className: "bg-sky-400 skill" },
    { name: "NextJS", className: "bg-gray-800 text-gray-300 skill" },
    { name: "TailwindCSS", className: "bg-cyan-300 skill" },
    { name: "TypeScript", className: "bg-sky-500 skill" },
    { name: "NodeJS", className: "bg-emerald-500 skill" },
    { name: "Express", className: "bg-yellow-500 skill" },
    { name: "MongoDB", className: "bg-green-400 skill" },
    { name: "Unity", className: "bg-gray-300 skill" },
    { name: "SQL", className: "bg-amber-300 skill" },
    { name: "Firebase", className: "bg-orange-400 skill" },
    { name: "React Native", className: "bg-sky-500 skill" },
    { name: "PostgreSQL", className: "bg-cyan-600 skill" },
    { name: "Supabase", className: "bg-green-400 skill" },
    { name: "Docker", className: "bg-blue-400 skill" },
  ];

  return (
    <div id="about" className="section">
      <h2
        className="wow animate fadeInUp"
        data-wow-delay="200ms"
        data-wow-duration="500ms"
      >
        <span className="font-mono text-accent">01.</span> About Me
      </h2>
      <div className="all flex flex-col md:flex-row-reverse wow ">
        <div
          className="right w-full md:w-1/2 align-middle mb-10 wow animate fadeInLeft"
          data-wow-delay="200ms"
          data-wow-duration="500ms"
        >
          <Image
            src={pfp}
            alt="Urwah"
            className="w-[60vw] md:w-[25vw] mx-auto rounded-full md:saturate-0 md:opacity-50 transition-[250ms] hover:saturate-100 hover:opacity-100 z-0"
          />
        </div>
        <div
          className="left w-full md:w-1/2 wow animate fadeInRight"
          data-wow-delay="200ms"
          data-wow-duration="500ms"
        >
          <p>
            Greetings, my name is Urwah, and I possess a profound passion for
            crafting digital experiences on the internet. Even in my early
            years, I harbored a curiosity about the inner workings of software
            and game development, driving me to pursue the art of creating them
            myself. This curiosity materialized as my very first coding
            endeavor—a blogger blogspot.
          </p>
          <br />
          <p>
            My primary objective at present is to maintain a steadfast
            commitment to continual learning and honing my skills in website and
            application development.
          </p>
          <br />
          <p>Here are few of the technologies that I frequently work with:</p>
          <br />
          <div className="flex gap-3 flex-wrap">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`${skill.className} wow animate fadeInUp`}
                data-wow-delay={`${index * 100}ms`}
                data-wow-duration="500ms"
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
