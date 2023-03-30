import React, { useState } from 'react'
import { logo } from '../assets';
import { navLinks } from '../constants';
import { close, menu } from '../assets';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='
          flex justify-between items-center
          font-poppins font-normal text-white pt-5'>
      <div>
        <img src={logo} alt='hoobank image'
             className='h-[32px] w-[124px]' 
        />
      </div>

      <div className='
        md: mr-2
         '>
        <ul className='flex'>
          {
            navLinks.map((link, index) => (
              <li className={`${index !== link.length-1 ? 
              'mr-8' : 'mr-0' } cursor-pointer
              hidden md:block
              `}
              key={link.id} index={index}
              >
                {link.title}
              </li>
            ))
          }
        </ul>
      </div>


      <div className='
        sm:block md:hidden
        '>
          <img src={ toggleMenu ? close : menu} alt="menu"
           onClick={() => setToggleMenu((prev) => !prev)}
          />

        {
          toggleMenu && (
            <div className={`
              md: mr-2
              ${ toggleMenu ? 'flex' : 'hidden'}
              text-white p-6 bg-black-gradient
           absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar
            
            `}>
              <ul className='list-none sm:flex flex-col justify-end items-center flex-1'>
                {
                  navLinks.map((link, index) => (
                    <li className={`font-poppins 
                     font-normal cursor-pointer 
                      text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white
                       `}> 
                      {link.title}
                    </li>
                  ))
                }
              </ul>
           </div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar
