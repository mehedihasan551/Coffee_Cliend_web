import React from 'react';
import bgImg from "../../imag/3.png"
import IconSection from './IconSection';

const MainHeader = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${bgImg})`, height: "100vh", width: "100%" }}>
                <div className=' flex justify-center  '>
                    <div className='  mt-64 ml-96'>
                        <div className='  md:ml-56 text-left'>
                            <h1 className=' font-bold text-white text-4xl font-serif italic mb-2'>Would you like a Cup of Delicious Coffee?</h1>
                            <p className='text-slate-400 font-serif'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! <br /> Enjoy the beautiful moments and make them memorable.</p>
                        </div>
                        <div className=' md:ml-56'> <button className="p-3  mt-4 hover:bg-transparent hover:border hover:border-white hover:text-white bg-[#E3B577] font-serif italic font-bold ">Learn More</button></div>
                    </div>
                </div>
            </div>
            <div>
                <IconSection></IconSection>
            </div>

        </div>
    );
};

export default MainHeader;