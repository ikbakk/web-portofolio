import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import SVGComponent from './Logo'

const Footer = () => {
  const media = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      link: import.meta.env.VITE_LINKEDIN
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      link: import.meta.env.VITE_INSTAGRAM
    },
    { name: 'Github', icon: <FaGithub />, link: import.meta.env.VITE_GITHUB }
  ]
  const MediaIcon = ({ bool }) =>
    media.map((item) => {
      return bool === true ? (
        <li className='hover-bordered '>
          <a target='_blank' href={item.link}>
            {item.icon}
            {item.name}
          </a>
        </li>
      ) : (
        <li
          className='tooltip tooltip-top tooltip-primary font-roboto-mono hover:text-primary'
          data-tip={item.name}>
          <a target='_blank' href={item.link}>
            {item.icon}
          </a>
        </li>
      )
    })
  return (
    <footer className={'footer footer-center bg-base-200  p-10'}>
      <div className=''>
        <SVGComponent className='h-24 w-24 fill-neutral-content hover:scale-110 hover:fill-primary' />
      </div>
      <div>
        <div className='grid grid-flow-col gap-4 text-2xl lg:text-5xl'>
          <MediaIcon />
        </div>
        <p>Copyright © 2022 - All right reserved</p>
      </div>
    </footer>
  )
}

export default Footer
