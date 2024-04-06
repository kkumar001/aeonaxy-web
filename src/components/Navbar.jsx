import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import dribble from '../assets/dribble.jpeg'

const Navbar = () => {
  return (
    <div className='w-full h-[64px] flex px-4 items-center gap-4 justify-between border-b-2 border-[#f4f4f4]'>
        <div className='flex gap-4 items-center'>
            <p className='font-medium text-lg'>dribbble</p>
            <nav className='lg:flex hidden gap-4 text-sm text-[#666666] font-medium'>
               <NavLink>Inspiration</NavLink>
               <NavLink>Find Work</NavLink>
               <NavLink>Learn Design</NavLink>
               <NavLink>Go Pro</NavLink>
               <NavLink>Hire Designers</NavLink>
            </nav>
        </div>
        <div className='flex gap-4 items-center'>
            <div className='bg-[#f3f3f3] h-[36px] w-[140px] rounded-lg sm:flex hidden items-center p-2 gap-2'>
                <FontAwesomeIcon icon={faSearch} className='text-[#98999a] size-[16px]'/>
                <input 
                type="text" 
                placeholder='Search'
                className='w-[100px] bg-[#f3f3f3] focus:outline-none'
                />
            </div>
            <FontAwesomeIcon icon={faBriefcase} className='text-[#98999a] size-[24px] sm:flex hidden'/>
            <img src={dribble} alt='Profile Pic' className='rounded-full size-[36px]'/>
            <button className='h-[36px] bg-[#d8578a] rounded-lg p-4 flex items-center justify-center text-white font-medium'>Upload</button>
        </div>
    </div>
  )
}

export default Navbar