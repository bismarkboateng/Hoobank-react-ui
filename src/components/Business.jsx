import React from 'react';
import { features } from '../constants';
import styles from '../style';


const Business = () => (
  <section 
    className='my-10 
      flex-1 flex flex-row mt-10 pt-[25px]'
    
    >

    <div className='mr-12'>
      <h1 className={`${styles.heading2}
       mb-5
      `}
      >
        You do the business, <br />
        we'll handle the money.
      </h1>
      <p className={`${styles.paragraph} mb-5`}>
      With the right credit card, you can improve your <br />
      financial life by building credit, earning rewards <br />
      and saving money. But with hundreds of credit cards on the market.
      </p>
      <button 
      type="submit"
      className="mt-5 py-4 px-7 bg-blue-gradient rounded-lg 
        font-poppins font-normal text-[17px]"
      >
        Get Started
      </button>
    </div>

    <div className='flex flex-col justify-between'>
      {
        features.map( (feature, index ) => (
          <div className={`${index !== feature.length-1 ? 'mb-4' : 'mb-0'}
              px-3 py-3 flex flex-row items-center feedback-card rounded-xl`}>
            <div className={`w-[64px] h-[64px] mr-3 rounded-full ${styles.flexCenter} bg-dimBlue`}> 
              <img src={feature.icon} alt="icon" 
               className="w-[30px] h-[30px] object-contain"
              />
            </div>

            <div>
              <h5 className='text-white font-poppins font-normal 
                font-semibold'>
                  {feature.title}
              </h5>
              <p className={`${styles.paragraph}
                 ${index !== feature.length-1 ? 'mb-3' : 'mb-0'}
                 font-poppins font-normal text-[16px]
                `}
                >
                {feature.content}
              </p>
            </div>
          </div>

        ))
      }
    </div>

  </section>
)

export default Business
