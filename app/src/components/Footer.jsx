import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";


function Footer(){
  const cookie= new Cookies();
  const token=cookie.get("TOKEN")
  const nav=useNavigate();
  return (
    <div className="footer container-fluid d-flex justify-content-center align-items-center">
      <div className="heading d-flex justify-content-center align-items-center flex-column">
        <div className="text-block d-flex justify-content-center align-items-center flex-column text-center">
          <p className="text-wrapper">Try Student Performance <br></br> Analysis today</p>
          <p className="get-started-for-free">
            Get started for free. <br />
            Add your whole team as your needs grow.
          </p>
        </div>
        <div className="btn-try d-flex align-items-center justify-content-center">
          <button onClick={()=>{token?nav("/auth/input_form"):nav("/register")}} style={{backgroundColor:"#4f9cf9",border:"none"}}>
          <div className="try-it-free">Try it&nbsp;free</div>
          <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 7.5H14.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.5 0.5L14.5 7.5L7.5 14.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;