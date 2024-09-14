import React from 'react'
import { useCart } from "../contexts/CartContext";
import CartIcon from './CartIcon';
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
const AllFoodItems = ({item}) => {
  const {handleAddToCart}= useCart()
  return (
    <>
    <CartIcon/>
      <div>
        {
          productItems && productItems.map((item, index) =>
          (
            <div className='h-54 w-screen flex justify-center ps-10 pe-10 mt-5 items-center gap-10'>
              <div className='h-28 w-28'>
                <img src={item.image} alt="" className='h-full w-full' />
              </div>
              <div className='w-52'>
                {/* <h2>Name</h2> */}
                <h1 className='font-bold'>{item.name} </h1>
              </div>
              <div className='w-52'>
                <h2>Category:</h2>
                <h2 className='text-[#808080]'>{item.category}</h2>
              </div>
              <div className='w-52'>
                <h2>Price:</h2>
                <h2 className='font-bold'>{item.price}.</h2>
              </div>
              <div className='w-52'>
                <button onClick={()=>handleAddToCart(item)} className='rounded-lg bg-orange-700 text-white p-3 font-bold hover:shadow-xl '>Add to Cart</button>
              </div>

            </div>
          ))
        }
      </div>
    </>
  )
}

export default AllFoodItems
