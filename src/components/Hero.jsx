import React from 'react';
import { robot, arrowUp, discount } from '../assets';
import styles from '../style';
import GetStarted from './GetStarted';

const Hero = () => {
    return (
        <div className='mt-[50px] flex flex-row items-center sm: flex flex-row'>

            <div>
                <div className="h-[25px] w-[350px] bg-discount-gradient 
                        text-dimWhite roundend-lg px-[10px] box-border flex flex-row
                        ">
                    <img src={discount} alt="hoobank" className='h-[27px] w-[27px]'/>
                    <p className='font-poppins font-normal text-dimWhite'>
                        <span className='text-white mr-1'>20%</span> 
                        Discout For
                        <span className='text-white ml-1'>1 Month</span> Account
                    </p>
                </div>

                <div>
                    <h1 className='text-[52px]
                            font-poppins font-normal
                            font-semibold'>
                        <span className='text-white'>The Next</span> <br />
                        <span className="text-gradient">Generation</span> <br />
                        <span className="text-white">Payment Method</span>
                    </h1>

                    <p className='text-dimWhite font-poppins font-normal'> 
                    Our team of experts uses a methodology to identify <br />
                    the credit cards most likely to fit your needs. <br />
                    We examine annual percentage rates, annual fees. <br />
                    </p>
                </div>
            </div>


            <div className='ss:flex hidden 
                md:mr-4 mr-0'>
                <GetStarted />
            </div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

                <img src={robot} alt="robot" className='w-[100%] h-[100%] relative z-[5]'/>
                <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
                <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
                <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
            </div>

        </div>
    );
}


export default Hero;    