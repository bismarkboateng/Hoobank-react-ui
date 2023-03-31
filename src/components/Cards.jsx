import React from 'react';
import { card } from '../assets';
import styles from '../style';


const Cards = () => (
  <section className='flex-1 flex justify-between 
       items-center pt-[20px] mt-[20px]'>
    <div className='font-poppins font-normal'>
      <h1 className={`${styles.heading2} mb-5 `}>
        Find a better card deal <br />
        in few easy steps.
      </h1>

      <p className={`${styles.paragraph} mb-5 `}>
        Elit enim sed massa etiam. Mauris eu adipiscing <br />
        ultrices ametodio aenean neque. <br />
        Fuse ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <button 
        type="submit"
        className="mt-5 py-4 px-7 bg-blue-gradient rounded-lg 
          font-poppins font-normal text-[17px]"
        >
          Get Started
      </button>
    </div>

    <div>
      <img src={card} alt='card image'
        className='w-[500px] h-[500px]'  
      />
    </div>

  </section>
)

export default Cards
