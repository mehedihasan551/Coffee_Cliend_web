import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import bacground from '../../imag/11.png'

const CoffeeDetails = () => {
    const coffee = useLoaderData()
    const { Photo, _id, category, chef, details, name, supplier, taste, price
    } = coffee
    return (
        <div className=' p-11' style={{ backgroundImage: `url(${bacground})`, height: "100vh" }}>
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-7xl mx-auto">
                <figure><img src={Photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold   text-[#331A15]">Name:{name}</h2>
                    <p className="card-title text-xl font-bold  text-[#331A15]">Taste: {taste}</p>
                    <p className="card-title text-xl font-bold  text-[#331A15]">Supplier: {supplier}</p>
                    <p className="card-title text-xl font-bold  text-[#331A15]">Price: {price}</p>
                    <p className="card-title text-xl font-bold  text-[#331A15]">Category: {category}</p>


                    <p className=' text-xl font-semibold text-[#331A15]'>Details: {details}</p>

                    <div className="card-actions justify-end">
                        <Link to='/'> <button className=' text-[#331A15] font-bold font-serif italic text-xl text-center mt-2 mb-2'>Back to Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;