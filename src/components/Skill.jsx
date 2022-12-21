import React from 'react'
import SkillCard from './SkillCard'

const Skill = () => {
  return (
    <div className='hero bg-base-300 py-20'>
      <div className='card-body h-full'>
        <h1 className='-mt-10 mb-20 text-center font-syncopate text-7xl font-bold uppercase'>
          Skills
        </h1>
        <div className='max-w-full rounded-3xl bg-base-100'>
          <SkillCard />
        </div>
      </div>
    </div>
  )
}

export default Skill
