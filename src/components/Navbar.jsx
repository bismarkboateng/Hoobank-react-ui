import React, { useState } from 'react'
import { logo } from '../assets';
import { navLinks } from '../constants';
import { close, menu } from '../assets';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='
          w-2/3 mx-auto flex justify-between items-center
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
          <img src={menu} alt="menu"
           onClick={() => {console.log("Clicked")}}
          />
      </div>
    </nav>
  )
}

export default Navbar
