import React, { useState } from 'react'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import Discount from './Discount'

const CartTotal = ({ item }) => {
    const {cartItems, setCartItems,totalPrice} = useCart()
    // var total
    // console.log(cartItems.price)
    return (
        <>
            <div className='flex justify-center items-center'>
                <div className='shadow-lg mt-5 p-5 border w-96 rounded gap-5 flex flex-col' >
                    <h1 className='text-2xl font-bold'>Bucket Total</h1>
                    <div className='flex justify-between'>
                        <h1 className=' font-bold'>Total: <span className='font-bold text-orange-600'>{totalPrice}</span></h1>
                        <div>
                            {/* {cartItems && cartItems.map((x, index) => (
                                // console.log(x.item.price)
                                
                                console.log(total)
                            ))} */}
                        </div>
                    </div>
                    <div>
                        <Discount/>
                    </div>
                    <Link to="/invoice" className='bg-orange-800 text-white w-full rounded mt-5 mb-3 p-2 text-center'>Proceed to Pay</Link>
                </div>
            </div>

        </>
    )
}

export default CartTotal
