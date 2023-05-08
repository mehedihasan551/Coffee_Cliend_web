import React from 'react';
import image from "../../imag/15.jpg"
import logo from "../../imag/logo1.png"

const NaveLayOut = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${image})`,backgroundRepeat:"no-repeat", height:"100",width:"100%"}}>
            <div className=' flex justify-center items-center gap-3 '>
                <img className=' w-16 mt-2'  src={logo} alt="" />
                <p className=' text-white font-bold text-xl font-serif italic'>Espresso Emporium</p>
            </div>
            </div>
        </div>
    );
};

export default NaveLayOut;