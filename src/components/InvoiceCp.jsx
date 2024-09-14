import React from 'react'
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { useCart } from '../contexts/CartContext';
const InvoiceCp = () => {
    const { cartItems, setCartItems, totalPrice } = useCart()
    return (
        <>
            <div className='flex justify-center items-center flex-col '>
                <div className='w-3/4 mt-5 shadow-lg'>
                    <div className='flex justify-between items-center font-bold font text-5xl text-orange-700 pt-5 pb-5 bg-gray-800 w-full ps-10 pe-10'>
                        <div className='flex gap-10 items-center'>
                            <div className='h-28 w-28 rounded-full overflow-hidden'>
                                <img src="https://cdn.dribbble.com/users/7004524/screenshots/15197928/media/40944f27c2dcfaf14038f387b4e88c2d.jpg" alt="" className='h-full w-full' />
                            </div>
                            <div className='flex justify-center items-center'><span><i>IN</i></span><span className='text-orange-200'>VOICE</span><span className='flex justify-center items-center'><LiaFileInvoiceSolid /></span></div>
                        </div>

                        <div className='h-32 w-32 rounded-full overflow-hidden'>
                            <img src="https://www.recipetineats.com/wp-content/uploads/2014/06/Pasta1.jpg" alt="" className='h-full w-full' />

                        </div>

                    </div>
                    <div className='flex flex-col justify-center mt-7 ps-28 pe-28 w-full pb-5'>


                        <div className="flex justify-between text-2xl font-bold mb-3">
                            <div>
                                <span>Invoice No.:</span><span></span>
                            </div>
                            <div>
                                <span>Date:</span><span></span>
                            </div>
                        </div>
                        <div className='flex text-2xl font-bold mb-5'>
                            <span>Bill to:</span>
                            <span></span>
                        </div>
                        <div className='flex flex-col text-xl mb-5 p-3 '>
                            <div className='flex justify-between w-full font-serif bg-orange-200'>
                                <div className='w-1/5'>Item</div>
                                <div className='w-2/5'>Name</div>
                                <div className='w-1/5'>Price(Rs.)</div>
                                <div className='w-1/5'>Quantity</div>
                                <div className='w-1/5'>Amount(Rs.)</div>
                            </div>
                            {cartItems && cartItems.map((x, index) => (
                            <div className='flex flex-row w-full mb-2'>
                                <div className='w-1/5'>{index +1}</div>
                                <div className='w-2/5'>{x.item.name}</div>
                                <div className='w-1/5'>{x.item.price}</div>
                                <div className='w-1/5'>{x.quantity}</div>
                                <div className='w-1/5'>{x.item.price * x.quantity}</div>
                            </div>

                        ))}

                        </div>
                        
                        <div className='text-2xl font-bold p-3 bg-orange-400 w-max text-white'>
                            <span>TOTAL:  </span>
                            <span className='text-red-800'>{totalPrice} (Rs.)</span>
                        </div>
                        
                        <div className='flex justify-between ps-10 pe-10 items-center'>
                            <div className='flex flex-col justify-center'>
                                <h2 className='font-serif'><i>Thank you for your business</i></h2>
                                <h2>_______________________________________________________________________________</h2>
                            </div>

                            <div className='h-28 w-28 rounded-full overflow-hidden'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKlgAl-fl8akcGQhi1f3AZ-Tx_k-zoWAhTh9P3SsaoEW4pex6xKsm9fVEIWY-NEr2HiA&usqp=CAU" alt="" className='h-full w-full' />
                            </div>
                        </div>

                    </div>
                    <div className='flex bg-gray-800 text-white justify-center items-center h-8 text-sm'>
                        <div>Call:xxx-xxx-xxx | </div>
                        <div>www.companyname.com</div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default InvoiceCp
