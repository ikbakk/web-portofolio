import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div className='hero min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-primary-content via-secondary to-accent'>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='my-10 w-5/6 space-y-10 rounded-xl bg-base-200 p-10'>
        <h1 className='text-center font-syncopate text-4xl font-bold uppercase lg:text-7xl'>
          Projects
        </h1>
        <ProjectCard />
      </div>
    </div>
  )
}

export default Project
