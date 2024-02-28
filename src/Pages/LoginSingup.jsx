import React from "react"

import "./Css/loginsignup.css"
const LoinSingup=()=>{
    return (
        <div className="Loginsignup">

<div className="logindignup-conntainer">
    <h1>Sign Up</h1>
    <div className="loinsignup-page">
        <input type="text" placeholder="Your Name"/>
        <input type="email" placeholder="Email Adress"/>
        <input type="password" placeholder="PassWord"/>
    </div>
    <button>Continue</button>
    <p className="loginsignup-loin">
        Already have a account <span>Login</span>
        <div className="loginsignup-agree">
            <input type="checkbox" name="" id=""/>
            <p>by continuing, i agree to the terms of use & pravicy policy</p>
        </div>
    </p>
</div>
        </div>
    )
}
export default LoinSingup