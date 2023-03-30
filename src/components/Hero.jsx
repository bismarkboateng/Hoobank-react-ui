import React from 'react';
import { robot, arrowUp, discount } from '../assets';

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

            <div className='bg-blue-gradient rounded-full 
                w-[100px] h-[100px] flex flex-row justtify-center items-center
                '>
                <p className='bg-primary rounded-full text-dimWhite 
                    h-[100px] w-[100px]
                    
                 '>
                    <p className='text-gradient text-[12px]'>
                        Get Started
                    </p>
                    <img src={arrowUp} alt="arrowup" />
                </p>
            </div>

            <div>
                <div className='b-blue-gradient relative z-[0]'/>
                <div className='white__gradient relative z-[1]'/>
                <div className='pink__gradient z-[2]'/>

                <img src={robot} alt="robot image" className='mt-[3px] w-[500px] md:w-[800px]'/>
            </div>

        </div>
    );
}


export default Hero;    