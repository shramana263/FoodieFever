import { useEffect, useState } from "react"
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import ImageBg from "../components/ImageBg";
import FoodCard from "../components/FoodCard";
import SiteSpeciality from "../components/SiteSpeciality";
import CategoryItems from "../components/CategoryItems";
import { useCart } from "../contexts/CartContext";
import CartItems from "../components/CartItems";
import { FaClipboardList } from "react-icons/fa";
import { SiAngellist } from "react-icons/si";
import { FaGift } from "react-icons/fa6";
import CartIcon from "../components/CartIcon";
import CartTotal from "../components/CartTotal";
import axios from "axios";
import Footer from "../components/Footer";
// import { IconName } from "react-icons/fa6";
// import Imageslide from "./components/Imageslide";
const categories = [
  {
    name: 'Pasta',
    image: 'https://images.aws.nestle.recipes/resized/0a0717810b73a1672a029c29788e557b_creamy_alfredo_pasta_long_left_1080_850.jpg',

  },
  {
    name: 'Chow',
    image: 'https://www.allrecipes.com/thmb/ZhDrBmciWzegNpBWB-5LXEvULao=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Easyspaghettiwithtomatosauce_11715_DDMFS_4x3_2424-8d7bf30b2622465f9dd78a2c6277eeb8.jpg',

  },
  {
    name: 'Coffee',
    image: 'https://rakskitchen.net/wp-content/uploads/2016/12/Cold-coffee-recipe-500x500.jpg',
  },
  {
    name: 'Beaverages',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/040/172/196/small/ai-generated-pictures-of-delicious-and-beautiful-drinks-photo.jpg',
  },
  {
    name: 'Dessert',
    image: 'https://t3.ftcdn.net/jpg/00/96/19/86/360_F_96198695_oyJg0I7ELpXI6608FI942PX9LlRRyEnd.jpg',
  },
  {
    name: 'Pizza',
    image: 'https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=D1z4xPCs-qQIZyUqRcHrnsJSJy_YbUD9udOrXpilNpI=',
  },
  {
    name: 'Burger',
    image: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg',
  },
  {
    name: 'Momo',
    image: 'https://content.jdmagicbox.com/comp/kolkata/44/033p19744/catalogue/momo-plaza-restaurant-lala-lajpat-rai-sarani-kolkata-fast-food-2g6oysm.jpg',
  },
]
const productItems = [
  {
    name: "Mix Veg Momo",
    image: "https://www.thecuriouschickpea.com/wp-content/uploads/2018/12/Tibetan-Veggie-Momos-1.jpg",
    category: "Momo",
    price: "150"
  },
  {
    name: "Onion Momo",
    image: "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/April-09/Corn_And_Spring_Onion_Momo_Recipe_Dimsum-7.jpg",
    category: "Momo",
    price: "120"
  },
  {
    name: "Egg Chowmin",
    image: "https://assets-global.website-files.com/60d34b8627f6e735cf28df18/637cb1602995dcad6ad1ea25_Chowmein%20Hero%201.1.jpg",
    category: "Chow",
    price: "159"
  },
  {
    name: "Latte Coffee",
    image: "https://www.roastycoffee.com/wp-content/uploads/mBPxUtTx-720x540.jpeg",
    category: "Coffee",
    price: "125"
  },
  {
    name: "Cold Coffee",
    image: "https://www.cookwithmanali.com/wp-content/uploads/2022/04/Cold-Coffee-500x500.jpg",
    category: "Coffee",
    price: "225"
  },
  {
    name: "White Sauce Pasta",
    image: "https://www.spiceupthecurry.com/wp-content/uploads/2023/02/white-sauce-pasta-2.jpg",
    category: "Pasta",
    price: "325"
  },
  {
    name: "Red Sauce Pasta",
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/4/8/2/FNM_050114-Classic-Red-Sauce-Recipe_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1397491331300.jpeg",
    category: "Pasta",
    price: "350"
  },
  {
    name: "Blue Lagoon",
    image: "https://alekasgettogether.com/wp-content/uploads/2021/09/blue-lagoon-mocktail-recipe-1.jpg",
    category: "Beaverages",
    price: "135"
  },
  {
    name: "Cranberry Gin Cocktail",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-nQ4m3Z_HmjDXxgWCzrVcwYp8W1dplkaOXe04ahrFg&s",
    category: "Beaverages",
    price: "165"
  },
  {
    name: "Paneer Tikka Momos",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/8/GA/OY/ZC/125386639/paneer-tikka-momo.jpg",
    category: "Momo",
    price: "199"
  },
  {
    name: "Chicken Peri Peri Momos",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/2/MQ/ZT/PT/8849101/chicken-cheese-peri-peri-momos.jpg",
    category: "Momo",
    price: "225"
  },
  {
    name: "Onion Pizza",
    image: "https://store.digipos.in/wp-content/uploads/2023/10/Cheese-Onion-pizza-1.jpg",
    category: "Pizza",
    price: "100"
  },
  {
    name: "Paneer Pizza",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBliIeAlZHqAaG8oRV3wN5N1Ipeir27F5ydKaq_99b8g&s",
    category: "Pizza",
    price: "120"
  },
  {
    name: "Crispy Chicken Burger",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVuviNMw51QTEEfgiXFKM_EYePSEF9cL-laaz18Lxn-g&s",
    category: "Burger",
    price: "155"
  },
  {
    name: "Sizzling Brownie With Ice-cream",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuL6NpdkQ2SFR9mf3Jvax0yQB-B36TRlePrNa2O9l0zQ&s",
    category: "Dessert",
    price: "225"
  },

]

const feature = [
  {
    image: <FaClipboardList size={35} />,
    title: 'Easy Ordering',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
  {
    image: <SiAngellist size={35} />,
    title: 'More Choices',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
  {
    image: <FaGift size={35} />,
    title: 'Earn Rewards',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },


]

export default function Home() {
  // const [styleOn, setStyleOn] = useState(notBox)

  const [filterCategory, setFilterCategory] = useState('Momo')
  const { cartItems } = useCart()
  const [categoryData, setCategoryData] = useState([])

  //  useEffect(()=>{
  //   axios.get('https://delivery-api.local/api/categories')
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //     setProductData(response.data.data)

  //   })
  //  },[])

  return (
    <>

      <CartIcon />
      <div>
        {categoryData && categoryData.map((category, index) => (
          <div key={index}>{category.name}</div>
        ))}
        {/* <div style={styleOn}
          className="bg-slate-600  " ></div>

        <Button change={change}/> */}
        <ImageBg />

        <div className="h-14 flex justify-center items-center text-4xl font-bold gap-4 mt-7 mb-7">
          <h1 className="">Browse Items by</h1><h1 className="text-orange-400">Category</h1>
        </div>
        {/* Foodcards */}
        <div className="ps-7 pe-7">
          <div className="overflow-scroll">
            {/* {filterCategory} */}
            <div className=" gap-7 whitespace-nowrap ">
              {
                categories && categories.map((item, index) => (
                  <FoodCard key={index} item={item} setFilterCategory={setFilterCategory} />

                ))
              }

            </div>
          </div>
        </div>
        {/* Show food items by category */}
        <div className="flex justify-center m-4">
          <h1 className="text-3xl font-bold text-orange-900">Food Items Based on Category</h1>
        </div>
        <div className="overflow-scroll whitespace-nowrap">

          <div className="flex justify-center border mb-5 overflow-scroll">

            {
              productItems &&
              productItems.filter((item) => item.category == filterCategory)
                .map((item, index) => (
                  <div key={index}><CategoryItems item={item} /></div>

                ))

            }
          </div>
        </div>

        {/* <SiteSpeciality/> */}
        <div className="flex justify-center items-center mb-5 font-bold gap-4 text-4xl">
          <h1 className=" text-orange-800 ">Order and </h1><h1 className="text-orange-400">Earn Rewards</h1>
        </div>
        <div className="flex w-full justify-center items-center">
          {
            feature && feature.map((feature, index) => (
              <SiteSpeciality key={index} feature={feature} />
            )

            )
          }
        </div>

        <div className="mt-4">
          <Footer />
        </div>



      </div>


    </>

  )
}