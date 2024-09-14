import React from 'react'
import { useEffect, useState } from "react"
const imageArray = [
    {
        src: 'https://www.happyveggiekitchen.com/wp-content/uploads/2016/02/1-baileys-chocolate-pots-046-1200x800.jpg'
    },
    {
        src: 'https://www.melskitchencafe.com/wp-content/uploads/IP-spaghetti2.jpg'
    },
    {
        src:'https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__1200_0_0_0_auto.jpg'
    }
];
const ImageBg = () => {

    // imageArray.push('https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg')
    // imageArray.push('https://houseofnasheats.com/wp-content/uploads/2023/03/Oreo-Dessert-Recipe-Square-1.jpg')
    // console.log(imageArray[1])


    const [Index, setIndex] = useState(0);
    // const [Img, setImg] = useState('https://copykat.com/wp-content/uploads/2023/12/Wingstop-Garlic-Parmesan-Wings-Pin-3-576x720.jpg');

    const nextSlide = () => {
        if (Index < (imageArray.length-1)) { setIndex(Index + 1) }
        else {
            // console.log('OverFlow')
            setIndex(0);
        }
    };

    const previousSlide = () => {
        if (Index > 0) {
            setIndex(Index - 1);
        }
        else {
            // console.log('inflow')
            setIndex((imageArray.length - 1))
        }
    };

    // useEffect(() => {

    //     setImg(imageArray[Index].src);
    // }, [Index]);
    return (

        <>
            <div className='flex justify-center items-center'>
                <div className=' w-full flex flex-row relative justify-center height_img'>

                    <div className='w-full'>
                        <img src={imageArray[Index].src} alt="image" className='h-full w-full' />

                    </div>
                    <div className='flex items-center absolute justify-between w-full h-full bg-yellow-900/20 '>
                        <button onClick={previousSlide} className='border-2 border-l-rose-200 bg-rose-100 rounded-[50%] text-lg p-5'>Prev</button>
                        <div className='flex justify-center items-center gap-3 flex-col'>
                            <div className="flex flex-col xl:flex-row text-8xl text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] gap-5">
                                <h1 className=''>Are You </h1><p className='text-orange-400 '>Hungry?</p>

                            </div>
                            <button className='border rounded-lg drop-shadow p-4 mt-3 text-white font-bold  hover:bg-orange-800 transition ease-in-out delay-200'>Order Now</button>
                        </div>
                        <button onClick={nextSlide} className='border-2 border-l-rose-200 bg-rose-100 rounded-[50%] text-lg p-5'>Next</button>
                    </div>

                </div>
            </div>

            {/* {imageArray && imageArray.map((image, index)=>(
                <div key={index} className='h-96 w-3/4'>

                    <img src={image.src} alt="image" className='w-full h-full' />
                    <div>
                        <button onClick={previousSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
                    </div>
                </div>
            ))} */}

        </>



    )
}

export default ImageBg
