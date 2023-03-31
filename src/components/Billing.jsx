import React from 'react';
import { bill, apple, google} from '../assets';
import styles from '../style';


const Billing = () => {
  return (
    <section className='flex-1 flex items-center justify-start pt-[30px] my-[30px]'>
      <div className='mr-[120px]'>
        <img src={bill} alt="bill images" 
          className='w-[500px] h-[500px]' 
        />
      </div>

      <div>
        <h1 className={`${styles.heading2} mb-5`}>
          Easily control your <br />
          billing & invoicing
        </h1>

        <p className={`${styles.paragraph} mb-10`}>
          Elit enim sed massa etiam. Mauris eu adipiscing <br />
          ultrices ametodio aenean neque. <br />
          Fuse ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>

        <div className='flex flex-row'>
          <img src={apple} alt="apple image" className='mr-5' />
          <img src={google} alt="google image" />
        </div>
      </div>
    </section>
  )
}

export default Billing
