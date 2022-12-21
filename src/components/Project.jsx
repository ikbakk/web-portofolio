import React from 'react'

const Project = () => {
  const projects = [
    {
      id: 1,
      title: 'Hospital Monitoring System',
      detail:
        'ESP32 + React App to display Heart Rate, SPO2, and Temperature in Realtime',
      link: 'https://github.com/ikbakk/Esp32-Hospital-Monitoring-System'
    },
    {
      id: 2,
      title: 'Hospital Monitoring System',
      detail:
        'ESP32 + React App to display Heart Rate, SPO2, and Temperature in Realtime',
      link: 'https://github.com/ikbakk/Esp32-Hospital-Monitoring-System'
    },
    {
      id: 3,
      title: 'Hospital Monitoring System',
      detail:
        'ESP32 + React App to display Heart Rate, SPO2, and Temperature in Realtime',
      link: 'https://github.com/ikbakk/Esp32-Hospital-Monitoring-System'
    }
  ]
  return (
    <div className='hero min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-primary-content via-secondary to-accent'>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='my-10 w-5/6 rounded-xl bg-base-200 p-10'>
        <h1 className='text-center font-syncopate text-4xl font-bold uppercase lg:text-7xl'>
          Projects
        </h1>
        <div className='grid h-full grid-rows-1 justify-center lg:grid-cols-4'>
          {projects.map((item) => (
            <div
              key={item.id}
              className='card image-full my-5 w-96 bg-base-100 shadow-xl shadow-base-100'>
              <figure>
                <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
              </figure>
              <div className='prose card-body font-roboto-mono'>
                <h2 className='card-title'>{item.title}</h2>
                <p>{item.detail}</p>
                <div className='card-actions justify-end'>
                  <a
                    href={item.link}
                    target='_blank'
                    className='btn-primary btn'>
                    Visit Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
