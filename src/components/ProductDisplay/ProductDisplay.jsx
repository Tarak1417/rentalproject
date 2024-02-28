import React, { useContext } from "react";

import "./ProductDisplay.css"

import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { Shopcontext } from "../../Context/Shopcontext";

const ProductDisplay=(props)=>{
    const {product}=props;
    const {addToCart}=useContext(Shopcontext)
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                </div>
                <div className="productdisplay-img">
            <img className="productdisplaymain-image" src={product.image} alt=""/>
            </div>
            </div>
           
            <div className="productdisplay-right">
              <h1>{product.name}</h1>
              <div className="productdisplay-right-star">
                  <img src={star_icon} alt=""/>
                  <img src={star_icon} alt=""/>
                  <img src={star_icon} alt=""/>
                  <img src={star_dull_icon}alt=""/>
                  <p>(122)</p>
              </div>
              <div className="product-right-prices">
                 <div className="productdisplayprice-old">${product.old_price}</div>
                 <div className="productdisplayprice-new">${product.new_price}</div>
              </div>
              <div className="productdisplay-right-description">
                A Light Weight,usually Knitted,pullOver shirts,close-fitting and with round neckLine and short sleves worn as an undershirt or outer
              </div>
              <div className="productdisplay-right-size">
                <h1>Select size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
              </div>
              <button onClick={()=>{addToCart(product.id)}}>Add TO Cart</button>
              <p className="productDisplay-right-category"><span>Category :</span>Women , T-Shirt, Crop Top </p>
              <p className="productDisplay-right-category"><span>Tags :</span>Modren, latest</p>
            </div>
        </div>
    )
}
export default ProductDisplay