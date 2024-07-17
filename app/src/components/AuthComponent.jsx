import React from "react";
import Cookies from "universal-cookie";
import Navbar from "./Navbar";
import Hero from "./Hero";
import RealTime from "./RealTime"
import Unlock from "./Unlock"
import HowItWorks from "./HowItWorks"
import Footer from "./Footer";
import Navbar1 from "./Navbar";


const cookies=new Cookies()


export default function AuthComponent() {
    const logout=()=>{
        cookies.remove("TOKEN");
        window.location.href = "/login";
    }
    return (
        <div>
        <Navbar1 props={"input_form"}/>
        <Hero/>
        <RealTime/>
        <Unlock/>
        <HowItWorks/>
        <Footer/>
        <button onClick={logout}>Logout</button>
        </div>
  );
}