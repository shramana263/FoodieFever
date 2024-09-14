import React, { useState } from 'react'
import { useCart } from '../contexts/CartContext'

const couponCode = [
    {
        name: "AB12C6#",
        // validity:['1/4/2024','25/4/2024']
        discountAmt: 300,
        discountOn: 2000,
        validTill: "February 12, 2024"
    },
    {
        name: "6PQ8C6",
        // validity:['12/4/2024','1/5/2024']
        discountAmt: 500,
        discountOn: 3000,
        validTill: "May 1, 2024"
    },
    {
        name: "HCQUIWC2",
        // validity:['20/4/2024','12/5/2024']
        discountAmt: 700,
        discountOn: 5000,
        validTill: 'May 12, 2024'
    }

]

const Discount = () => {
    const { cartItems, setCartItems, totalPrice } = useCart()
    // const [style, setStyle] = useState("couponInput")
    const [discountPrice, setDiscountPrice] = useState(0)
    const [component, setComponent] = useState('InputDiscount')
    const discountApply = (coupon) => {
        // console.log(totalPrice)
        if (totalPrice >= coupon.discountOn) {
            // console.log('discount!!!')
            
            setDiscountPrice(totalPrice - coupon.discountAmt)
            return
        }
        setComponent('CouponUnderflow')



    }
    const handleDiscount = () => {

        const inputCode = document.getElementById('cpCode')

        // if (inputCode) {
        const coupon = couponCode.find(coupon => coupon.name === inputCode.value)
        if (coupon) {
            var dateDiff = new Date(coupon.validTill).getTime() - new Date().getTime();    //Future date - current date
            var daysTill = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
            // console.log(daysTill);
            if (daysTill > 0) {
                // inputCode.value = "Coupon Is Applied!"
                setComponent('ValidDiscount')
                discountApply(coupon)
                return
            }

            // inputCode.value = "Coupon Is Expired!"
            setComponent('CouponExpired')
            return

        }

        // inputCode.value = "Coupon is Invalid!"
        setComponent('CouponInvalid')
        return



        // }
        // else{
        //     return(
        // <InputDiscount hand/>leDiscount={handleDiscount} />
        //     )
        // }

    }
    return (
        <>
            <div className='flex flex-col justify-start gap-3'>
                {component === 'InputDiscount' && <InputDiscount handleDiscount={handleDiscount} />}
                {component === 'ValidDiscount' && <ValidDiscount discountPrice={discountPrice} />}
                {component === 'CouponExpired' && <CouponExpired />}
                {component === 'CouponInvalid' && <CouponInvalid />}
                {component === 'CouponUnderflow' && <CouponUnderflow />}

            </div>


        </>
    )
}

export default Discount

export const InputDiscount = ({ handleDiscount }) => {

    return (
        <>
            <div className='flex flex-col justify-start gap-3'>

                <input type="text" placeholder='Enter coupon code if available' id='cpCode' className='border focus:outline-none rounded p-3' />
                <button onClick={handleDiscount} className='bg-orange-500 font-bold w-1/4 text-white rounded-s-full rounded-e-full p-2'>Submit</button>


            </div>


        </>

    )
}


const ValidDiscount = ({discountPrice}) => {
    return (
        <>
            <div className='border-2 text-center border-dashed border-green-600 rounded font-bold text-green-600'>
                <p>Coupon Is Applied!</p>
            </div>
            <div>
                <span className='font-bold'>DISCOUNTED PRICE: </span>
                <span className='font-bold text-red-600'>{discountPrice}</span>
            </div>
        </>
    )

}

const CouponExpired = () => {
    return (
        <>
            <div className='border border-dashed border-red-600 rounded font-bold text-red-600'>
                <p>Coupon Is Expired!</p>
            </div>
        </>
    )
}

const CouponInvalid = () => {
    return (
        <>
            <div className='border border-dashed border-red-600 rounded font-bold text-red-600'>
                <p>Coupon Is Invalid!</p>
            </div>
        </>
    )
}

const CouponUnderflow=()=>{
    return(
        <>
            <div className='border border-dashed border-red-600 rounded font-bold text-red-600'>
                <p>Sorry, the purchase amount is less than needed for validate the coupon.</p>
            </div>
        </>
    )
}