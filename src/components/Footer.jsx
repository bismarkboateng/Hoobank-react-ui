import React from 'react';
import { footerLinks } from '../constants';
import { logo, twitter, facebook, instagram, linkedin } from '../assets';
import styles from '../style';

const Footer = () => {

  footerLinks.map( (footerLink) => {
      console.log(footerLink.title)
  })

  return (
    <>
    <section className='flex flex-row justify-between mt-20 pt-[20px]'>
      
      <div className='pt-2'>
        <img src={logo} alt='logo image' />
        <p className={`${styles.paragraph}`}>
          A new way to make the payments easy, <br />
          reliable and secure
        </p>
      </div>

        {
          footerLinks.map((footerLink) => (
            <div className='text-white font-poppins font-normal'>
              <ul>
                <li className='font-semibold mb-2'> { footerLink.title} </li>
                {
                  footerLink.links.map((link, index) => (
                    <li className={`${styles.paragraph}
                        ${index !== footerLink.length -1 ? 'mb-3' : 'mb-0'}
                        cursor-pointer hover:text-blue`}> 
                     {link.name} </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
    </section>

    <section>
          <div className='mt-10 w-[100%] bg-white h-[0.09px]' />

          <div className='flex justify-between'>
            <p className={`${styles.paragraph} mt-5`}>
            2021 HooBank. All Right Reserved.
            </p>

            <div className='flex flex-row'>
              <img src={instagram} alt='instagram logo' className='w-[20px] mr-5' />
              <img src={facebook} alt='facebook logo' className='w-[20px] mr-5' />
              <img src={twitter} alt='twitter logo' className='w-[20px] mr-5' />
              <img src={linkedin} alt='linkedin logo' className='w-[20px]' />
            </div>
          </div>



    </section>
    </>

  )
}

export default Footer
