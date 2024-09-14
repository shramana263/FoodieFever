import React, { createContext, useContext, useEffect, useState } from "react";


const CartContext = createContext({

    cartItems: false,
    setCartItems: () => { },
    handleAddToCart: () => { },
    handleDelete: () => { },
    totalPrice: 0,
    setTotalPrice: () => { }
});

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const handleAddToCart = (item, add = 1) => {



        const exItem = cartItems && cartItems.find(x => x.item.name === item.name)
        const sampleObj = {
            item: item,
            quantity: 1
        }
        if (!cartItems) {
            setCartItems(prev => [sampleObj])
            alert("Item Added to Cart!")
        }

        else if (!exItem) {

            setCartItems(prev => [...prev, sampleObj])
            alert("Item Added to Cart!")

        }
        else if (add == -1) {
            cartItems.find(x => x.item.name === item.name).quantity -= 1
            if (cartItems.find(x => x.item.name === item.name).quantity == 0) {
                const Item = cartItems.filter(x => x.item.name !== item.name)
                setCartItems(Item)
                // cartItems.delete(x => x.item.name === item.name)
            }
            else {
                setCartItems(prev => [...prev])
            }

        }
        else if (add == 1) {

            cartItems.find(x => x.item.name === item.name).quantity += 1
            setCartItems(prev => [...prev])
            
        }



    }

    // const getTotalPrice = () => {

    //     return totalPrice

    // }
    const handleDelete = (item) => {

        const Item = cartItems.filter(x => x.item.name !== item.name)
        // console.log(Item)
        setCartItems(Item)
    }
    useEffect(() => {
        const HelperTotal = cartItems && cartItems.reduce((total, item, cartItems) => {
            //console.log(item.item.price, item.quantity)
            return total += (parseFloat(item.item.price) * parseFloat(item.quantity))
        }, 0)
        // console.log("Total....",HelperTotal)
        setTotalPrice(prev => HelperTotal)
    }, [cartItems])



    return (
        <CartContext.Provider value={{ cartItems, setCartItems, handleAddToCart, handleDelete, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);