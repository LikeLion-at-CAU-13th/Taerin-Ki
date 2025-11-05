import React from 'react'
import { projects } from '@/constant/projects'
import Link from 'next/link'

export default function ProjectPage(){
  return (
    <div className="min-h-screen pt-[12vh]">
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-12 text-3xl font-bold text-center sm:text-4xl md:text-5xl">
          아기사자의 2025 프로젝트
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <div 
                key={project.id}
                className="p-6 transition-all duration-300 bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow-lg"
              >
                <h2 className="mb-3 text-xl font-semibold">{project.title}</h2>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-sm font-medium text-blue-600 hover:text-blue-800">
                  자세히 보기 &gt;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
