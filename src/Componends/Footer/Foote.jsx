import React from 'react';
import bg from '../../imag/13.jpg'
import footim from '../../imag/24.jpg'
import logo from "../../imag/logo1.png"
import { FaFacebook, FaTwitter, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa';
import { MdCall, MdLocationOn, MdEmail } from 'react-icons/md';

const Foote = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${bg})`, height: "500px" }} className=' flex justify-center '>



                <div className=' mt-20 mr-11 my-5'>
                    <img className=' w-16 mt-2 mb-4' src={logo} alt="" />
                    <h1 className=' text-[#331A15] font-bold font-serif italic text-2xl mt-2 mb-2'>Espresso Emporium</h1>
                    <p className='text-slate-600 font-serif'>Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>
                    <div className=' flex gap-3 mt-4 mb-2'>
                        <FaFacebook className=' text-2xl text-[#331A15]'></FaFacebook>
                        <FaTwitter className=' text-2xl text-[#331A15]'></FaTwitter>
                        <FaInstagramSquare className=' text-2xl text-[#331A15]'></FaInstagramSquare>
                        <FaLinkedinIn className=' text-2xl text-[#331A15]'></FaLinkedinIn>
                    </div>
                    <p className=' text-[#331A15] font-bold font-serif italic text-2xl mt-4 mb-2'>Get in Touch</p>
                    <div className='mt-4 '>
                        <p className='flex gap-2'><MdCall className='mt-1  text-[#331A15] ' /><span>+88 01533 333 333</span></p>
                        <p className='flex gap-2'><MdEmail className='mt-1  text-[#331A15]' /><span>info@gmail.com</span></p>
                        <p className='flex gap-2'><MdLocationOn className='mt-1  text-[#331A15]' /><span>72, Wall street, King Road, Dhaka</span></p>

                    </div>
                </div>

                <div className=' mt-40 ml-11'>
                    <h1 className=' text-[#331A15] font-bold font-serif italic text-3xl mt-2 mb-2'>Connect with Us</h1>
                    <input type="text" placeholder="Name" className="input border-4  hover:border-[#331A15]  input-sm w-full max-w-xs mt-2 mb-2 transition duration-500 ease-in-out md:ease-in" />
                    <br />

                    <input type="text" placeholder="Email" className="input border-4  hover:border-[#331A15] input-md w-full max-w-xs mb-2 transition duration-500 ease-in-out md:ease-in" />
                    <textarea className="textarea border-4  hover:border-[#331A15] w-full mb-2 transition duration-500 ease-in-out md:ease-in" placeholder="Message"></textarea>
                    <br />
                    <button className=" p-2 rounded-full border-2 font-bold border-[#331A15] hover:bg-[#331a15] hover:text-white transition duration-500 ease-in-out md:ease-in">Send Message</button>

                </div>


            </div>
            <div style={{ backgroundImage: `url(${footim})`, height: "25px" }} className=' font-bold text-white font-serif text-center'>Copyright Espresso Emporium ! All Rights Reserved </div>
        </div>
    );
};

export default Foote;