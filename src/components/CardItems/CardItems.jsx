import React, { useContext } from "react";
import "./CardItems.css";
import { Shopcontext } from "../../Context/Shopcontext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
    const { getTotalCartAmount,all_product, cartItems, removeCart } = useContext(Shopcontext);

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className="carticon" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartItems-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img  className=" carditems-remove-icon" src={remove_icon} onClick={() => { removeCart(e.id) }} alt="" />
                            </div>
                        </div>
                    );
                }
                return null;
            })}
            <div className="carditems-down">
                <div className="carditemstotal">
                    <h1>card Totals</h1>
                    <div>
                        <div className="carditems-total-items">
                            <p>subtatal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="carditems-total-items">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className="carditems-total-items">
                           <h3>Total</h3> 
                           <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECK OUT</button>
                </div>
                  <div className="carditems-promocode">
                    <p>If you have promo code add Here</p>
                    <div className="cartitem-promobox">
                        <input type="Text" placeholder="promo code"/>
                        <button>Submit</button>
                    </div>
                  </div>
            </div>
        </div>
    );
};

export default CartItems;
