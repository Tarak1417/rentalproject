import React, { createContext, useState } from "react";
import all_product from "../components/Assets/all_product";

export const Shopcontext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[all_product[index].id] = 0;
    }
    return cart;
};

const ShopcontextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const GetTotalCartitems=()=>{
        let totalItem=0;
        for (const item in cartItems)
        {
          if(cartItems[item]>0) {
            totalItem+=cartItems[item];
          }  
        }
        return totalItem;
    }
   

    const contextValue = {
        GetTotalCartitems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeCart
    };

    return (
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    );
};

export default ShopcontextProvider;
