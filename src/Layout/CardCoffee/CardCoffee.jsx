import React from 'react';

const CardCoffee = ({coffee}) => {
    console.log(coffee);
    const {Photo,category,chef,details,name,supplier,taste
    }=coffee
    return (
        <div className=' flex'>
           <div className=' flex'>
           <img src={Photo} alt="" />
           </div>
        </div>
    );
};

export default CardCoffee;