import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../utils/constants';
import { textVariant } from '../utils/motion';
import { CiCircleCheck } from 'react-icons/ci';
import { GoArrowUpRight } from 'react-icons/go';
import grainImage from '../assets/grain.jpg';

const Projects = () => {
  return (
    <section className="pb-16 lg:py-24 px-14">
      {/* <div className="container"> */}
      <div className="bg-gray-900 p-4 text-white mx-auto">
        <motion.div variants={textVariant()}>
          <h2 className="text-cyan-500 font-bold text-3xl md:text-5xl text-center mx-auto">
            Projects
          </h2>
        </motion.div>
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="sticky top-16"
              style={{ top: `calc(64px + ${index * 20}px)` }}
            >
              <div className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 pb-0 border border-white/20 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none">
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{ backgroundImage: `url(${grainImage})` }}
                ></div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-12">
                    <div className="bg-gradient-to-t from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-2xl md:text-4xl text-transparent bg-clip-text ">
                      <h3>{project.title}</h3>
                    </div>

                    <p className="font-serif text-lg mt-2 md:mt-5">
                      {project.desc}
                    </p>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.points.map((point, index) => (
                        <li
                          key={index}
                          className="flex gap-2 text-sm md:text-base text-white/50"
                        >
                          <CiCircleCheck className="size-5 md:size-6" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex my-8 gap-4 w-full">
                      <a href={project.live_url} className="flex-1">
                        <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                          <span>Visit Live Site</span>
                          <GoArrowUpRight className="size-4" />
                        </button>
                      </a>
                      <a href={project.github_url} className="flex-1">
                        <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                          <span>View Github</span>{' '}
                          <GoArrowUpRight className="size-4" />
                        </button>
                      </a>
                      {project.github_url2 && (
                        <a href={project.github_url} className="flex-1">
                          <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                            <span>View Github </span>{' '}
                            <GoArrowUpRight className="size-4" />
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-t-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Projects;
