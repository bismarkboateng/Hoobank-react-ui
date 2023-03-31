import React from "react";
import { airbnb, binance, coinbase, dropbox,  } from "../assets";

const Companies = () => (
    <section className='mt-20 flex flex-row justify-between items-center'>
        <img src={airbnb} alt='airbnb image' className='w-[200px]' />
        <img src={binance} alt='binance image' className='w-[200px]' />
        <img src={coinbase} alt='coinbase image' className='w-[200px]' />
        <img src={dropbox} alt='dropbox image' className='w-[200px]' />
    </section>
)   


export default Companies;