import React from 'react'

const Button = ({change}) => {
  return (
    <>
      <button onClick={change} 
        className="text-blue-600 border-2 
        border-blue-500 p-5 rounded-[50%] 
        bg-[#ffcc44] shadow-lg hover:bg-red-300 focus:bg-orange-700">Click!</button>
    </>
  )
}

export default Button
