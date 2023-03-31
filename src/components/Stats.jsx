import React from 'react';
import { stats } from '../constants/index';
import styles from '../style';

const Stats = () => {
  return (
    <div className='flex flex-row mt-20 mb-20
        items-center justify-between font-poppins font-normal'>
      {
        stats.map( (stat) => (
          <div key={stat.id} className='flex justify-start font-poppins font-normal items-center'>
            <h1 className={`${styles.heading2}`}>{ stat.value }</h1>
            <p className={`${styles.paragraph} ml-0 text-gradient`}>{stat.title}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Stats
