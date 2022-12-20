import React from 'react'
import TypeIt from 'typeit-react'

const Home = () => {
  return (
    <div className='hero min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-primary-content via-secondary to-accent'>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content mb-20 max-w-8xl flex-col space-y-20 lg:m-20 lg:flex-row-reverse'>
        <div className='flex w-1/2 items-center justify-center lg:mt-0 lg:mb-0 lg:w-auto'>
          <img
            src='/src/assets/images/hero_image.png'
            className='rounded-lg lg:max-w-3xl'
          />
        </div>
        <div className='space-y p-10 '>
          <div className='prose text-left text-2xl lg:text-left lg:text-2xl'>
            <h1 className='font-roboto-mono font-bold uppercase text-white'>
              I'm an Electrical Engineering student who learn Web Development
            </h1>
            <h2 className='max-w-5xl text-justify font-roboto-mono text-white'>
              Currently learning{' '}
              <TypeIt
                options={{
                  strings: ['React', 'React Native'],
                  breakLines: false,
                  loop: true,
                  cursorChar: '<h3>|</h3>',
                  lifeLike: true,
                  nextStringDelay: [5000, 500],
                  loopDelay: 5000
                }}></TypeIt>
            </h2>
          </div>
          <div className='flex justify-center py-10 font-syncopate lg:justify-start'></div>
        </div>
      </div>
    </div>
  )
}

export default Home
