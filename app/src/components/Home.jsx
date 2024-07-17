import Hero from "./Hero";

import RealTime from "./RealTime";
import Unlock from "./Unlock";
import HowItWorks  from './HowItWorks';
import Footer  from './Footer';
import Navbar1 from "./Navbar";

function Home(){
    return(
        <>
        <div className="container-fluid">
        <Navbar1 props={"register"}/>
        <Hero/>
        <RealTime/>
        <Unlock/>
        <HowItWorks/>
        <Footer/>
        </div>
        </>
    )
}
export default Home;