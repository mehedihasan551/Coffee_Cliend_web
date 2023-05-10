import React from 'react';
import { GiPaintBrush } from 'react-icons/gi';
import { MdDelete } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const CardCoffee = ({ coffee, setCoffee, coffe }) => {
    console.log(coffee);
    const { Photo, _id, category, chef, details, name, supplier, taste, price
    } = coffee

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffe.filter(cof => cof._id !== _id)
                            setCoffee(remaining);
                        }
                    })

            }
        })
    }
    return (
        <div>
            <div className='bg-[#F4F3F0] rounded-xl flex justify-between' >
                <div className=' flex justify-center'>
                    <img className=' w-36' src={Photo} alt="" />
                    <div className='mt-12'>
                        <p><span className=' font-bold text-md'>Name</span>:<span className='text-slate-600 text-center font-serif ml-1'>{name}</span></p>
                        <p><span className=' font-bold text-md'>Chef</span>:<span className='text-slate-600 text-center font-serif ml-1'>{chef}</span></p>
                        <p><span className=' font-bold text-md'>Price</span>:<span className='text-slate-600 text-center font-serif ml-1'>{price} Taka</span></p>
                    </div>
                </div>
                <div className=' mt-12 ml-16 mr-12 '>
                    <Link to={`/CoffeeDetails/${_id}`}> <AiFillEye className=' bg-[#E3B577] text-2xl text-white pt-1 pb-1 mb-2 rounded-lg'></AiFillEye></Link>
                    <Link to={`/updateCoffee/${_id}`}>  <GiPaintBrush className=' bg-[#2d2821] text-2xl text-white pt-1 pb-1 mb-2 rounded-lg'></GiPaintBrush></Link>
                    <MdDelete onClick={() => handleDelete(_id)} className=' text-white bg-[#d71111] text-2xl pt-1 pb-1 mb-2 rounded-lg'></MdDelete>
                </div>

            </div>
        </div>
    );
};

export default CardCoffee;