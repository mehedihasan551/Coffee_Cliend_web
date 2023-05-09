import React from 'react';
import MainHeader from '../../Layout/HeaderSection/MainHeader';
import CoffeeSection from '../../Layout/Popular_Products/CoffeeSection';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const coffees=useLoaderData()
    // console.log(coffees);
    return (
        <div>
       <MainHeader></MainHeader>

     <CoffeeSection
        coffees={coffees} 
        ></CoffeeSection>)
   
       
        </div>
    );
};

export default Home;