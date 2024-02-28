import React ,{useContext, useRef, useState}from "react"
import {Link} from "react-router-dom"

import './Navbar.css'

import logo from "../Assets/logo.png"
import cart_icon from '../Assets/cart_icon.png'
import { Shopcontext } from "../../Context/Shopcontext"



const Navbar=()=>{
    const [menu,setMenu]=useState("shop")
    const {GetTotalCartitems}=useContext(Shopcontext)
    const menRef=useRef()
    
    return(

     <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>SHOPPER</p>
        </div>
        
        <ul ref={menRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link to="/">Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link to="/mens">Men</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link to="/womens">Women </Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to="/kids">Kids </Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
     <div className="nav-login-cart">
       <Link to="/login"><button>Login</button></Link> 
        <Link to="/cart"><img src={cart_icon} alt=""/></Link>
        <div className="nav-cart-count">{GetTotalCartitems()}</div>
     </div>
     </div>
    )
}
export default Navbar

