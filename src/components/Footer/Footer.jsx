import React from "react";
import "./Footer.css"
import footer_logo from "../Assets/logo_big.png"
import instagram_icon from "../Assets/instagram_icon.png"
import pinterst_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"

const Footer=()=>{
    return (
        <div className="footer">
           <div className="footer-logo">
            <img src={footer_logo} alt=""/>
            <p>SHOPPER</p>
           </div>
           <ul className="footer-links">
            <li>company</li>
            <li>products</li>
            <li>offices</li>
            <li>about</li>
            <li>contact</li>
           </ul>
           <div className="footer-social-icons">
            <div className="icons-contaainer">
                <img src={instagram_icon} alt=""/>
            </div>
            <div className="icons-contaainer">
                <img src={pinterst_icon} alt=""/>
            </div>
            <div className="icons-contaainer">
                <img src={whatsapp_icon} alt=""/>
            </div>
           </div>
           <div className="footer-copy-right">
            <hr/>
            <p>CopyRight @2024-All Rights Reserved. </p>
           </div>
        </div>
    )
}
export default Footer