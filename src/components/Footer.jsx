import React from 'react';
import { footerLinks } from '../constants';
import { logo } from '../assets';
import styles from '../style';

const Footer = () => {
  return (
    <section className='
        border border-red-500 mt-20 flex flex-row
        font-poppins font-normal text-white
        '>

      <div>
        <img src={logo} alt='site logo' className='mb-3'/>
        <p className={`${styles.paragraph}`}>
          A new way to make the payments <br />
          easy, reliable and secure
        </p>
      </div>



      <div>
      {
        footerLinks.map((links) => {
          <div key={links.key} className='font-poppins font-normal'>
            <h5 className='font-poppins font-normal'>
              { console.log(links.title)}
               { links.title} 
            </h5>

            <ul>
                {
                links.links.map( (link, index) => {
                  <li key={link.name} className={`${styles.paragraph} 
                    ${index !== link.length-1 ? 'mb-3' : 'mb-0'}`
                  }>
                    {console.log(link.name)}
                    {link.name}
                  </li>
                })
                }
            </ul>

            
          </div>
        })
      }
      </div>

    </section>
  )
}

export default Footer
