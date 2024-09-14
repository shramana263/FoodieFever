import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { FaHamburger } from "react-icons/fa";
import { useStateContext } from '../contexts/StateContext';
const Navbar = ({ userName, onLogout, isOpen, setOpen }) => {
  const { token } = useStateContext()
  const [isMobile, setMobile] = useState(false)
  const [isHamburgerOpen, setHamburgerOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        console.log("mobile")
        setMobile(true)
      }
      else {
        console.log("desktop")
        setMobile(false)
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();

  }, [])
  return (
    <>
      {" "}
      <div className='flex flex-row bg-orange-700
     xl:p-5 p-3 text-[18px] w-screen text-sm xl:text-lg'>

        <div className='flex xl:gap-7 gap-1 w-full'>
          {/* <div className='h-10 w-10 rounded-[50%] overflow-hidden'>
            <img src="https://cdn.dribbble.com/users/7004524/screenshots/15197928/media/40944f27c2dcfaf14038f387b4e88c2d.jpg" alt="" className='h-full w-full' />
          </div> */}
          {

          }
          <div className='font-bold flex justify-center items-center'>{userName}</div>
          {
            !isMobile &&
            <>
              <Link to="" className="flex justify-center items-center text-gray-300 hover:bg-orange-900 hover:text-white rounded-md px-3 py-2 font-sans font-bold">Home</Link>
              <Link to="/about" className="flex justify-center items-center text-gray-300 hover:bg-orange-900 hover:text-white rounded-md px-3 py-2 font-sans  font-bold">About</Link>
              <Link to="/contact" className="flex justify-center items-center text-gray-300 hover:bg-orange-900 hover:text-white rounded-md px-3 py-2 font-sans  font-bold">Contact</Link>
              <Link to="/order" className=" flex justify-center items-center text-gray-300 hover:bg-orange-900 hover:text-white rounded-md px-3 py-2 font-sans  font-bold">Order</Link>
            </>
          }
          {
            isMobile &&
            <>
              <div className='text-white flex justify-center items-center relative ps-3 pe-3'
                onClick={() => {isHamburgerOpen? setHamburgerOpen(false):setHamburgerOpen(true)}}
              >
                <FaHamburger size={30} />

                <div className={`${isHamburgerOpen ? "" : 'hidden'} bg-white text-black flex flex-col w-24 justify-center items-center absolute z-10 top-12 left-0`}>
                  <Link to="" className='border-b-2 w-full flex justify-center items-center h-10 '>
                    Home
                  </Link>
                  <Link to="about" className='border-b-2 w-full flex justify-center items-center h-10 '>
                    About
                  </Link>
                  <Link to="contact" className='border-b-2  w-full flex justify-center items-center h-10 '>
                    Contact
                  </Link>
                  <Link to="order" className='  w-full flex justify-center items-center h-10 '>
                    Order
                  </Link>

                </div>
              </div>

            </>
          }
          <div className='flex xl:gap-5 gap-2  xl:ms-10 ms-1'>
            <input type="text" placeholder='Enter Food name' className='border-0 shadow-md rounded h-10 w-96 ps-5 focus:outline-none' />
            <button className='bg-orange-900 rounded-md shadow p-3 h-10 text-white text-center flex items-center'><IoSearch size={30} /></button>
          </div>


        </div>
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        {/* <a href="#" class="text-gray-300 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a> */}

        <Link to="/cart" className=" hover:bg-orange-900 text-white rounded-md px-3 py-2 font-sans text font-bold justify-end md:float-right"><FaShoppingCart size={30} /></Link>
        {
          !token &&
          <>
            <Link to="/signin" className="bg-orange-900 text-white rounded-md ms-3 px-3 py-2 font-sans text font-bold justify-end md:float-right">Log In</Link>
            <Link to="/signup" className="bg-orange-900 text-white rounded-md ms-3 px-3 py-2 font-sans text font-bold justify-end md:float-right">Sign Up</Link>

          </>
        }
        {
          token &&
          <Link to="#" onClick={onLogout} className="bg-orange-900 text-white rounded-md ms-3 px-3 py-2 font-sans text font-bold justify-end md:float-right"><IoMdLogOut size={30} /></Link>
        }






      </div>
    </>


  )
}

export default Navbar
