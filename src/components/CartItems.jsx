import React, { useEffect, useState } from 'react'
import { useCart } from '../contexts/CartContext'


const CartItems = () => {
    const {cartItems}= useCart()
    
     return (
        <>
        <div className="flex flex-col gap-5">
          {/* <div className="flex flex-row gap-10"><span>Name</span><span>Quantity</span></div> */}
          <div>
            {cartItems && cartItems.map((x, index) => (
              <IndvItem x={x} key={index} />
            ))}
          </div>
        </div>
            
            
        </>
    )
}

export default CartItems

const IndvItem=({x})=>{

    const {handleAddToCart,cartItems}= useCart()
    
    const{handleDelete}=useCart()
    return(
        
        <div className="">
                
                <div className="flex justify-center items-center">
                <div className='flex flex-row items-center gap-5 mb-5 justify-between w-3/4'>
                    <div className="h-28 w-28">
                        <img src={x.item.image} alt="" className='h-full w-full' />
                    </div>
                    <div className='font-bold font-serif'>
                        {x.item.name}
                    </div>
                    <div className='font-bold'>
                        Price:{x.item.price * x.quantity} Rs.
                        
                        {/* price:{ItemPrice} */}
                    </div>
                    
                    <div className='flex font-bold text-lg'>
                        <button onClick={()=>handleAddToCart(x.item,-1)}>
                            <div className='h-8 w-8 bg-orange-800 text-white flex justify-center items-center border border-orange-500 rounded-tl-lg rounded-bl-lg'>-</div>
                        </button>
                        <div className='h-8 w-8 bg-orange-800 text-white flex justify-center items-center border border-orange-500'>{x.quantity}</div>
                        <button onClick={()=>handleAddToCart(x.item,1)}
                         className='h-8 w-8 bg-orange-800 text-white flex justify-center items-center border border-orange-500 rounded-tr-lg rounded-br-lg'>
                            +
                        </button>
                    </div>
                    <div>
                        <button className='border border-orange-700 p-2.5 rounded hover:bg-orange-300 hover:curser-pointer' onClick={()=>handleDelete(x.item)}>
                            <div className='h-6 w-6'><img src="https://cdn-icons-png.flaticon.com/512/484/484662.png" alt="" className='h-full w-full' /></div>
                        </button>
                    </div>
                </div>
            </div>

                
                 </div>
    )
}