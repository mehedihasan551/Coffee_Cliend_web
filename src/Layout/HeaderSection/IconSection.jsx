import React from 'react';
import icon1 from '../../imag/1.png'
import icon2 from '../../imag/2.png'
import icon3 from '../../imag/4.png'
import icon4 from '../../imag/h.png'


const IconSection = () => {
    return (
        <div>
            <div className='bg-[#ECEAE3]'>
                <div className=' md:flex justify-center p-8 gap-8'>
                    <div className='mb-8 '>
                        <img src={icon1} alt="" />
                        <h1 className=' text-[#331A15] font-bold font-serif italic text-2xl mt-2 mb-2'>Awesome Aroma</h1>
                        <p className='text-slate-600 font-serif'>You will definitely be a fan of the design <br /> & aroma of your coffee</p>
                    </div>
                    <div>
                        <img src={icon2} alt="" />
                        <h1 className=' text-[#331A15] font-bold font-serif italic text-2xl mt-2 mb-2'>High Quality</h1>
                        <p className='text-slate-600 font-serif'>We served the coffee to you maintaining <br /> the best quality</p>
                    </div>
                    <div>
                        <img src={icon3} alt="" />
                        <h1 className=' text-[#331A15] font-bold font-serif italic text-2xl mt-2 mb-2'>Pure Grades</h1>
                        <p className='text-slate-600 font-serif'>The coffee is made of the green coffee <br />  beans which you will love</p>
                    </div>
                    <div>
                        <img src={icon4} alt="" />
                        <h1 className=' text-[#331A15] font-bold font-serif italic text-2xl mt-2 mb-2'>Proper Roasting</h1>
                        <p className='text-slate-600 font-serif'>Your coffee is brewed by first roasting <br /> the green coffee beans</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default IconSection;