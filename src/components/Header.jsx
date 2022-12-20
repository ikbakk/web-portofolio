import React, { useState } from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { BsDownload } from 'react-icons/bs'

const Header = () => {
  const menu = [
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

  const MenuItems = ({ bool }) =>
    menu.map((item) => {
      return bool === true ? (
        <li className='hover-bordered '>
          <a target='_blank' href={item.link}>
            {item.icon}
            {item.name}
          </a>
        </li>
      ) : (
        <li
          className='tooltip tooltip-bottom tooltip-primary font-roboto-mono hover:text-primary'
          data-tip={item.name}>
          <a target='_blank' href={item.link}>
            {item.icon}
          </a>
        </li>
      )
    })

  return (
    <nav
      className={
        'navbar sticky top-0 z-50 space-x-10 bg-base-200 py-5 duration-100 lg:relative'
      }>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn-ghost btn lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={
              'dropdown-content menu rounded-box menu-normal mt-6 w-52 bg-base-200 p-2 text-xl shadow'
            }>
            <MenuItems bool={true} />
          </ul>
        </div>
        <a
          href='/'
          className='btn-ghost btn font-syncopate text-xl uppercase hover:bg-primary hover:text-base-200 md:text-xl lg:text-3xl'>
          <h1>{import.meta.env.VITE_NAME}</h1>
        </a>
      </div>
      <div className='text-md navbar-end space-x-10 font-syncopate '>
        <ul className='menu menu-horizontal hidden px-1 text-3xl lg:flex'>
          <MenuItems bool={false} />
        </ul>
        <div className='btn-outline btn-primary btn space-x-3 text-lg duration-100 '>
          <p>Resume</p>
          <div className='-mt-1'>
            <BsDownload />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
