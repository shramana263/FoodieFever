import React from 'react'

const SiteSpeciality = ({feature}) => {
  return (
    <>
    <div className="h-56 w-52 flex justify-center items-center flex-col gap-7 border m-5 hover:cursor-pointer ">
        <div className="h-22 w-full flex justify-center items-center">
        <div className='h-full w-14  flex justify-center items-center'>
                {feature.image}
            </div>
        </div>
            
            <div className=" w-full flex flex-col ps-3 justify-center items-center text-center">
              <p className='text-lg font-bold'>{feature.title} </p>
              <p className='text-xs'>{feature.description}</p>
              {/* <p>Price: {item.price}</p> */}
            </div>
        </div>
      
    </>
  )
}

export default SiteSpeciality
