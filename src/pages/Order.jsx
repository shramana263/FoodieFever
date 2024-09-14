import React from 'react'
import Navbar from '../components/Navbar'
import AllFoodItems from '../components/AllFoodItems'
import { useCart } from "../contexts/CartContext";
const Order = () => {
  return (
    <>
        
        <div className='text-4xl font-bold flex justify-center items-center gap-3 mt-5'><p>All</p><p className='text-orange-400'>Items</p></div>
        <AllFoodItems/>
    </>
  )
}

export default Order
