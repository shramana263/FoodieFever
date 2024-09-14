import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const CartIcon = () => {
  const { cartItems } = useCart()
  return (
    <>
    {/* style={{ top: "650px", left: "100px" }} */}
      <div className='fixed z-10' >
        <div className="cart_icon" >
          <Link to="/cart">
            <button className="bg-orange-500 shadow-lg relative rounded-full p-4 text-white">
              <div>
                <div className=''><TiShoppingCart size={40} /></div>
                {!cartItems &&

                  <div className='rounded-full bg-orange-900 h-5 w-5 absolute top-0 right-1 flex justify-center items-center'>
                    0
                  </div>
                }
                {cartItems &&
                  <div className='rounded-full bg-orange-900 h-5 w-5 absolute top-0 right-1 flex justify-center items-center'>
                    {cartItems.length}
                  </div>
                }


              </div>


            </button>

          </Link>


        </div>
      </div>
    </>
  )
}

export default CartIcon
