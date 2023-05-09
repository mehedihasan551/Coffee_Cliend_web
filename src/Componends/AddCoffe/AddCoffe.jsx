import React from 'react';
import bacground from '../../imag/11.png'
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { data } from 'autoprefixer';
import Swal from 'sweetalert2';

const AddCoffe = () => {
    const handleAddCoffeee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const Photo = form.Photo.value;
        const newCoffee = { name, chef, category, details, supplier, taste, Photo };
        console.log(newCoffee);

        // send data in server
        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                    if(data.insertedId){
                        Swal.fire({
                            title: 'Success!',
                            text: 'Coffee added successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                    }
            })

    }

    return (
        <div style={{ backgroundImage: `url(${bacground})`, height: "100vh" }} className=' mb-16'>
            <div className=' ml-28 mt-14'><Link to='/'><div className=' flex'><BsArrowLeft className='mt-3 mr-2  text-2xl' /><span className=' text-[#331A15] font-bold font-serif italic text-xl text-center mt-2 mb-2'>Back to home</span></div></Link></div>
            <div className='bg-[#F4F3F0] p-24 mr-16 ml-16 mt-16'>

                <div className=' text-center mb-8'>
                    <h2 className=' text-[#331A15] font-bold font-serif italic text-5xl text-center mt-2 mb-2'>Add A Coffee</h2>
                    <p className='text-slate-600 font-serif italic'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. <br /> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleAddCoffeee} >
                    {/* row gap in colume */}
                    <div className=' flex gap-2'>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-slate-600 font-serif italic text-lg font-bold">Coffee Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name='name' placeholder="Coffee name" className="input input-bordered  w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-slate-600 font-serif italic text-lg font-bold">Chef</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name='chef' placeholder="Chef" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* row gap in colume */}
                    <div className=' flex gap-2'>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-slate-600 font-serif italic text-lg font-bold">Supplier</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-slate-600 font-serif italic text-lg font-bold">Taste</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name='taste' placeholder="Enter coffee taste" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* row gap in colume */}
                    <div className=' flex gap-2'>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-slate-600 font-serif italic text-lg font-bold">Category</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name='category' placeholder="Enter coffee category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-slate-600 font-serif italic text-lg font-bold">Details</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name='details' placeholder="Enter coffee details" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* row gap in colume */}
                    <div className=' '>
                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text text-slate-600 font-serif italic text-lg font-bold">PHOTO URL</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name='Photo' placeholder="Photo url" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    <input type="submit" value="add coffee" className="p-3  mt-4 hover:bg-[#946323] hover:border   bg-[#E3B577] font-serif italic text-lg font-bold font-bold transition duration-4 00 ease-in-out md:ease-in w-full rounded-2xl" />
                </form>
            </div>

        </div>
    );
};

export default AddCoffe;