import React, { useState } from 'react'

const Header = ({ setDark, dark }) => {
  const menu = [{ name: 'Home' }, { name: 'About' }, { name: 'Contact' }]

  const MenuItems = () =>
    menu.map((item) => {
      return (
        <li className='hover-bordered font-roboto-mono'>
          <a>{item.name}</a>
        </li>
      )
    })

  return (
    <nav
      className={`navbar fixed z-50 space-x-10 ${
        dark === true ? 'bg-base-200' : 'bg-accent-focus'
      }  py-5 duration-100`}>
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
            className={`dropdown-content menu rounded-box menu-normal mt-6 w-52 ${
              dark === true ? 'bg-base-200' : 'bg-accent-focus'
            } p-2 text-xl shadow`}>
            <MenuItems />
          </ul>
        </div>
        <a
          href='/'
          className='btn-ghost btn font-syncopate text-3xl normal-case md:text-4xl lg:text-5xl'>
          <h1>Portofolio</h1>
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 text-3xl'>
          <MenuItems />
        </ul>
      </div>
      <div className='text-md navbar-end font-syncopate font-semibold md:text-lg lg:text-xl'>
        <div className=''>
          <input
            type='checkbox'
            onClick={() => {
              setDark(!dark)
            }}
            className='toggle-primary toggle'
          />
        </div>
      </div>
    </nav>
  )
}

export default Header
