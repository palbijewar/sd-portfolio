"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import data from "../data/projects.json";
import Link from "next/link";

interface ProjectType {
  id: number,
  title: string,
  slug: string,
  isFeatured: boolean,
  description: string,
  image: string; 
}

export function Projects() {
  const featuredProjects = data.projects.filter((project: ProjectType) => project.isFeatured);

  return (
    <div id="expertise" className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">My project&rsquo;s expertise</p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredProjects.map((project: ProjectType) => (
             <div key={project.id} className="flex justify-center">
              <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
             <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
             {project.image && (
                <div>
                  <Image src={project.image} alt={project.title} width={100} height={100} /> 
                </div>
              )}
              <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200" >{project.title}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow mb-5">{project.description}</p>
             </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
}
