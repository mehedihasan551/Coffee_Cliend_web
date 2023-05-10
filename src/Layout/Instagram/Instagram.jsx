import React from 'react';
import insaImag1 from '../../imag/Rectangle 9.png'
import insaImag2 from '../../imag/Rectangle 10.png'
import insaImag3 from '../../imag/Rectangle 11.png'
import insaImag4 from '../../imag/Rectangle 12.png'
import insaImag5 from '../../imag/Rectangle 13.png'
import insaImag6 from '../../imag/Rectangle 14.png'
import insaImag7 from '../../imag/Rectangle 15.png'
import insaImag8 from '../../imag/Rectangle 16.png'

const Instagram = () => {
    return (
        <div>
            <div>
                <div className=' text-center mt'>
                    <p className='text-slate-600 font-serif text-xl'>Follow Us Now</p>
                    <h1 className=' text-[#331A15] font-bold font-serif italic text-5xl text-center mt-2 mb-2 ml-16'>Follow on Instagram</h1>
                </div>
                <div className=' w-1/2 mr-auto ml-auto mt-8 mb-12'>
                    <div className=' grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-2  '>
                        <img className='ml-8 mr-8 w-96 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-500' src={insaImag1} alt="" />
                        <img className='ml-8 mr-8 w-96 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-500' src={insaImag2} alt="" />
                        <img className='ml-8 mr-8  w-96 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-500' src={insaImag3} alt="" />
                        <img className='ml-8 mr-8  w-96 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-500' src={insaImag4} alt="" />
                        <img className='ml-8 mr-8  w-96 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-500' src={insaImag5} alt="" />
                        <img className='ml-8 mr-8  w-96 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-500' src={insaImag6} alt="" />
                        <img className='ml-8 mr-8  w-96 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-500' src={insaImag7} alt="" />
                        <img className='ml-8 mr-8  w-96 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-500' src={insaImag8} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instagram;