import React from "react";
import Cookies from "universal-cookie";
import Navbar from "./Navbar";
import Hero from "./Hero";
import RealTime from "./RealTime"
import Unlock from "./Unlock"
import HowItWorks from "./HowItWorks"
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';

const cookies=new Cookies()


export default function AuthComponent() {
    const navigate=useNavigate();
    const logout=()=>{
        cookies.remove("TOKEN",{path:"/"});
         navigate("/login");
    }
    const input=()=>{
        cookies.remove("TOKEN",{path:"/"});
         navigate("input_form");
    }
    return (
        <div>
        <Navbar/>
        <Hero/>
        <RealTime/>
        <Unlock/>
        <HowItWorks/>
        <Footer/>
        <button onClick={logout}>Logout</button>
        <button onClick={input}>Input</button>   
        </div>
  );
}
