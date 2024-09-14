import React from 'react'

const FoodCard = ({ item, setFilterCategory }) => {

  return (
    <>

      <div
        onClick={() => setFilterCategory(item.name)}
        className="h-56 w-52 inline-block border m-5 rounded-[10px] overflow-hidden shadow-md hover:cursor-pointer">
        <div className='h-3/4 w-full  flex justify-center items-center'>
          <img src={item.image} alt="" className='h-full w-full overflow-hidden' />
        </div>
        <div className="h-1/4 w-full flex flex-col bg-orange-700 ps-3 text-white justify-center items-center">
          <p>{item.name}</p>
          {/* <p>Price: {item.price}</p> */}
        </div>
      </div>


    </>
  )
}

export default FoodCard
