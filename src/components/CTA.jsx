import React from 'react';
import styles from '../style';

const CTA = () => (
  <section className='mt-20 bg-black-gradient-2 flex flex-row items-center justify-between py-20 rounded-xl'>
    <div className='ml-10'>
      <h1 className={`${styles.heading2} mb-3 `}>
        Let's try our service now!
      </h1>
      <p className={`${styles.paragraph}`}>
        Everything you need to accept card payments and <br />
        grow your business anywhere on the planet
      </p>
    </div>

    <div className='mr-20'>
      <button 
          type="submit"
          className="py-4 px-10 bg-blue-gradient rounded-lg 
            font-poppins font-normal text-[17px]"
          >
            Get Started
      </button>
    </div>


  </section>
)

export default CTA
