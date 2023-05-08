import React from 'react';
import coffe from '../../imag/side.png'
import house from '../../imag/5.png'
import { FaCoffee } from 'react-icons/fa';
import Instagram from '../Instagram/Instagram';

const CoffeeSection = () => {
    return (
        <div>
            <div>
                <div className='mt-24 flex justify-between mb-12'>
                    <img className=' h-96' src={coffe} alt="" />
                    <div>
                        <div>
                            <p className='text-slate-600 text-center font-serif'>--- Sip & Savor ---</p>
                            <h1 className=' text-[#331A15] font-bold font-serif italic text-5xl text-center mt-2 mb-2'>Our Popular Products</h1>
                            <div className=' flex justify-center'>
                                <button className="p-3  mt-4 hover:bg-transparent hover:border hover:border-black hover:text-black bg-[#E3B577] hover:bg-[#ECEAE3] font-serif italic font-bold transition duration-4 00 ease-in-out md:ease-in btn-outline flex"><span>Add Coffee</span><FaCoffee className='mt-1 ml-2 text-lg' /></button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-20'> <img className='  md:h-84 ' src={house} alt="" /></div>
                </div>
                <Instagram></Instagram>
            </div>
        </div>
    );
};

export default CoffeeSection;