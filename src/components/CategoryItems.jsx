import React, { useEffect } from 'react'
import { useCart } from '../contexts/CartContext'
import { TiShoppingCart } from "react-icons/ti";


const CategoryItems = ({ item }) => {
   const {handleAddToCart}= useCart()
    return (
        <>
            <div className='flex flex-wrap overflow-scroll'>
                {/* {item.name} */}

                <div className="w-48 h-56 flex flex-col gap-2 m-3">
                    <div className="h-28 w-28 flex">
                        <img src={item.image} alt="" className="h-full w-full" />
                    </div>
                    <div className='font-bold w-40 flex '>
                        {item.name}
                    </div>
                    <div className='flex text-sm'>
                        <h3 className='font-bold '>Price: </h3>
                        {item.price} Rs.
                    </div>
                    <div>

                        <button type="button" onClick={()=>handleAddToCart(item)} className="flex justify-center items-center font-bold text-black border border-orange-600 hover:text-white hover:bg-gradient-to-r hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 rounded text-sm p-2 text-center transition ease-in-out delay-50">Add to <TiShoppingCart size={25}/></button>
                        {/* <button className='text-orange-700 font-bold border border-orange-600 p-2 rounded hover:bg-orange-600 hover:text-white'>Add to Cart</button> */}
                    </div>
                </div>




            </div>

        </>
    )
}

export default CategoryItems
