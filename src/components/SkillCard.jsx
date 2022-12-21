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
      title: 'Javascript',
      explanation:
        'Hands on experience with JavaScript on several projects. The language have been used mostly with NPMjs to ensure easier dependency managing and easier development. Because of JavaScript loose typing, I have learned how not to lose my nerves after getting a random exception that has nothing to do with the real bug and how to debug these issues efficiently (not only in js).'
    },
    {
      id: 3,
      title: 'Javascript',
      explanation:
        'Hands on experience with JavaScript on several projects. The language have been used mostly with NPMjs to ensure easier dependency managing and easier development. Because of JavaScript loose typing, I have learned how not to lose my nerves after getting a random exception that has nothing to do with the real bug and how to debug these issues efficiently (not only in js).'
    }
  ]

  return (
    <div className='text-justify font-roboto-mono'>
      <div className='hidden lg:grid lg:grid-cols-3'>
        {skills.map((item) => (
          <div className='card my-10 w-96 bg-primary text-primary-content lg:mx-20 lg:my-10'>
            <div className='card-body'>
              <h2 className='card-title'>{item.title}</h2>
              <p>{item.explanation}</p>
              <div className='card-actions justify-end'></div>
            </div>
          </div>
        ))}
      </div>
      <div className='lg:hidden'>
        <div className='grid justify-center gap-3 md:grid-cols-3 '>
          {skills.map((item) => (
            <div id={item.id} className='carousel-item w-full'>
              <div className='card my-10 bg-primary text-primary-content'>
                <div className='card-body'>
                  <h2 className='card-title'>{item.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillCard
