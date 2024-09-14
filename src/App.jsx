import { useEffect, useState } from "react"
import Navbar from "./components/Navbar";
import FoodCard from "./components/FoodCard";
import ImageBg from "./components/ImageBg";


// import Imageslide from "./components/Imageslide";

const box = {
  height: "50px",
  width: "50px",
  backgroundColor: "red",
  border: "2px solid #000",
  margin: "20px",
};
const notBox = {
  height: "50px",
  width: "50px",
  backgroundColor: "blue",
  border: "2px solid #000",
  margin: "20px",
};
const items=[
  {
    name:'pasta',
    image:'https://images.aws.nestle.recipes/resized/0a0717810b73a1672a029c29788e557b_creamy_alfredo_pasta_long_left_1080_850.jpg',
    price:200
  },
  {
    name:'Chow',
    image:'https://images.aws.nestle.recipes/resized/0a0717810b73a1672a029c29788e557b_creamy_alfredo_pasta_long_left_1080_850.jpg',
    price:500
  }
]
export default function App() {
  const [styleOn, setStyleOn] = useState(notBox)


  function change() {
    styleOn === box ? setStyleOn(notBox) : setStyleOn(box)

  }

  return (
    <>
      <Navbar />
      <div>
        {/* <div style={styleOn}
          className="bg-slate-600  " ></div>

        <Button change={change}/> */}
        Hello App
        <ImageBg />
        <div className="h-14 flex mt-3 justify-center items-center">
          <h1 className="text-3xl">Browse Items</h1>
        </div>
        <div className="ps-7 pe-7">
          <div className="overflow-scroll">
            <div className=" gap-7 whitespace-nowrap ">
              {
                items && items.map((item,index)=>(
                  <FoodCard key={index} item={item} />

                ))
              }
              
            </div>
          </div>
        </div>



      </div>

    </>

  )
}