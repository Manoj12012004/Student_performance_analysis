import React from "react";
import "./Unlock.css";
import rafiki from './Asessts/Home/college-entrance-exam-rafiki.png';

function Unlock() {
  return (
    <div className="unlock container-fluid d-flex align-items-center flex-column ">
      <div className="block container-fluid d-flex flex-row align-items-center justify-content-center row" >
        <div className="left-section col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center">
          <div className="heading d-flex flex-column justify-content-center w-100" style={{textAlign:"left"}}>
            <h1 className="unlock-insights">
              Unlock Insights &amp; Drive Academic Success
            </h1>
          </div>
          <div className="text-block d-flex flex-column align-items-center">
            <p className="text-wrapper">
              Ready to unlock the full potential of your students? Sign up today and start your journey towards academic excellence.
            </p>
          </div>
        </div>
        <div className="right-section col-md-6 col-sm-12" >
          <img className="college-entrance" alt="College entrance" src={rafiki}/>
        </div>
      </div>
    </div>
  );
};
export default Unlock;
