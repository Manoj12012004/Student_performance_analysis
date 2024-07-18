import React from "react";

import Hero from "./Hero";
import RealTime from "./RealTime"
import Unlock from "./Unlock"
import HowItWorks from "./HowItWorks"
import Footer from "./Footer";
import Navbar1 from "./Navbar";



export default function AuthComponent() {
    return (
        <div>
        <Navbar1 props={"input_form"}/>
        <Hero/>
        <RealTime/>
        <Unlock/>
        <HowItWorks/>
        <Footer/>
        </div>
  );
}