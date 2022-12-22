import React from 'react'

const ProjectCard = () => {
  const projects = [
    {
      id: 1,
      title: 'Hospital Monitoring System',
      detail:
        'ESP32 + React App to display Heart Rate, SPO2, and Temperature in Realtime',
      link: 'https://project-74b65.web.app/'
    }
  ]
  const gridColumns = () => {
    if (projects.length < 4) {
      return `lg:grid-cols-${projects.length}`
    }
    if (projects.length >= 4) {
      return 'lg:grid-cols-4'
    }
    return
  }
  const columnCount = gridColumns()
  return (
    <div
      className={`grid h-full grid-rows-1 justify-center gap-10 ${columnCount}`}>
      {projects.map((item) => (
        <div
          key={item.id}
          className=' card image-full max-w-prose bg-base-100 duration-300 hover:scale-110 hover:outline-primary hover:outline'>
          <figure>
            <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
          </figure>
          <div className='card-body font-roboto-mono'>
            <h2 className='card-title'>{item.title}</h2>
            <p>{item.detail}</p>
            <div className='card-actions justify-end'>
              <a
                href={item.link}
                target='_blank'
                className='btn-outline btn-primary btn hover:btn-primary'>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectCard
