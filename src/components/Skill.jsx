import React from 'react'
import SkillCard from './SkillCard'

const Skill = () => {
  return (
    <div className='hero bg-base-300 lg:min-h-screen '>
      <div className='card-body'>
        <h1 className='text-center font-syncopate text-4xl font-bold uppercase lg:text-7xl'>
          Skills
        </h1>
        <SkillCard />
      </div>
    </div>
  )
}

export default Skill
