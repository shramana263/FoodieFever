import React from 'react'
import Navbar from '../components/Navbar'
import CartItems from '../components/CartItems'
import CartTotal from '../components/CartTotal'

const Cart = () => {
  return (
    <>
      {/* <Navbar/> */}
      <div className='flex flex-col justify-center items-center mt-7'>
        <div className='text-5xl font-bold flex flex-row gap-3'><p className=''>Your </p><p className='text-orange-400'>Bucket</p></div>
        <div className='w-screen mt-5 border'>
            <CartItems/>
        </div>
      </div>
      <CartTotal/>
    </>
  )
}

export default Cart
