import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='h-68 w-full bg-red-950 text-white p-10 flex justify-between'>
        <div className='w-1/2 flex items-center justify-center flex-col gap-3 font-bold'>
            <Link to={'/about'}>ABOUT US</Link>
            <Link to={'/order'}> ORDER WITH US</Link>
            <Link to={'/contact'}>CONTACT US</Link>
        </div>
        <div className='w-1/2 flex items-center justify-center flex-col gap-3 font-bold'>
            <div>Follow Us On </div>
            <div className='flex gap-2'>
                <div className='border rounded-full p-3 bg-red-900'><FaInstagram size={25}/></div>
                <div className='border rounded-full p-3 bg-red-900'><FaFacebookF size={25}/></div>
                <div className='border rounded-full p-3 bg-red-900'><FaTwitter size={25}/></div>
                <div className='border rounded-full p-3 bg-red-900'><FaYoutube size={25}/></div>

            </div>
        </div>
        
      </div>
      <div className="flex justify-center items-center bg-red-950 ps-48 pe-48">
                <div className='flex justify-between w-full ms-10 me-10'>
                    <div className='text-gray-500 text-xl'>
                        Copyright 2024 - FoodieFever
                    </div>
                    <div className=' flex text-gray-500 text-xl pb-14'>
                        <div className='border-r border-gray-500 ps-3 pe-3'>About</div>
                        <div className='border-r border-gray-500 ps-3 pe-3'>Accessibility</div>
                        <div className='border-r border-gray-500 ps-3 pe-3'>Contact</div>
                        <div className='ps-3 pe-3'>Privacy Policy</div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Footer
