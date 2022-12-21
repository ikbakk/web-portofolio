import React from 'react'

const SkillCard = () => {
  const skills = [
    {
      id: 1,
      title: 'Javascript',
      explanation:
        'Hands on experience with JavaScript on several projects. The language have been used mostly with NPMjs to ensure easier dependency managing and easier development. Because of JavaScript loose typing, I have learned how not to lose my nerves after getting a random exception that has nothing to do with the real bug and how to debug these issues efficiently (not only in js).'
    },
    {
      id: 2,
      title: 'React',
      explanation:
        'Hands on experience with React started because of my first project which is my college final year project. I have learned how not to hard code everything and not repeating myself as much as possible after randomly jump into react while learning javascript. Then re-learn the concept in much proper way than before and patiently which make me easier to understand the concept better than before i was started learn React.'
    },
    {
      id: 3,
      title: 'Javascript',
      explanation:
        'Hands on experience with JavaScript on several projects. The language have been used mostly with NPMjs to ensure easier dependency managing and easier development. Because of JavaScript loose typing, I have learned how not to lose my nerves after getting a random exception that has nothing to do with the real bug and how to debug these issues efficiently (not only in js).'
    }
  ]

  return (
    <div className=' flex justify-center text-justify font-roboto-mono'>
      <div className='hidden lg:grid lg:grid-cols-3 lg:gap-10'>
        {skills.map((item) => (
          <div className='card prose my-10 bg-primary text-primary-content lg:my-10'>
            <div className='card-body'>
              <h1 className='card-title text-4xl text-base-200'>
                {item.title}
              </h1>
              <p className='text-lg'>{item.explanation}</p>
              <div className='card-actions justify-end'></div>
            </div>
          </div>
        ))}
      </div>
      <div className='lg:hidden'>
        <div className='grid justify-center gap-5'>
          {skills.map((item) => (
            <div className='grid max-w-full grid-cols-2 rounded-3xl bg-base-100 p-10'>
              <h2>{item.title}</h2>
              <progress
                className='progress-primary max-w-full'
                value='75'
                max='100'></progress>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillCard
