import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
import { quotes } from '../assets';

const Testimonials = () => {
  return (
    <section className='pt-[20px] mt-20'>
      <div className='flex justify-beteween font-poppins font-normal items-center pt-[10px]'>
        <h1 className={`${styles.heading2}`}>
          What people are <br />
          saying about us
        </h1>
        <p className={`${styles.paragraph}`}>
        Everything you need to accept card
        payments and grow your business anywhere on the planet
        </p>
      </div>

      <div className='flex-1 flex flex-row mt-10'
        >
        {
          feedback.map((feed) => (
            <div key={feed.id} className={`feedback-card p-[20px] rounded-xl flex-1 justify-between mt-20`}>
              <img src={quotes} alt='quote image' className='mb-20' />
              <p className={`${styles.paragraph} mb-5`}>
                {feed.content}
              </p>

              <div className='flex flex-row items-center mt-20'>
                <img src={feed.img} alt='people image' 
                  className='mr-3 w-[50px]' 
                />
                <div className='font-poppins font-normal'>
                  <h5 className='font-semibold  text-white text-[20px]'>{feed.name}</h5>
                  <p className={`${styles.paragraph}`}>{feed.title}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Testimonials
