import React from "react";
import "./HowItWorks.css";
import imagecontainer from './Asessts/Home/Imagecontainer.svg'; // Adjust the path as necessary

function HowItWorks(){
  return (
    <div className="how-it-works container-fluid d-flex justify-content-center p-5">
      <div className="block d-flex justify-content-between align-items-center row">
        <img className="image-container col-md-6 col-sm-12" alt="" src={imagecontainer}/>
        <div className="content d-flex flex-column col-md-6 col-sm-12">
          <h1 className="heading">How It Works</h1>
          <div className="description">
            <p className="data-collection-we">
              Data Collection
            </p>
            <p className="text-wrapper-2">
              We gather data from various sources including assessments, assignments, and attendance records.
            </p>
            <p className="data-collection-we">
              Data Analysis
            </p>
            <p className="text-wrapper-2">
              Our advanced algorithms analyze the collected data to generate meaningful insights and reports.
            </p>
            <p className="data-collection-we">
              Report Generation
            </p>
            <p className="text-wrapper-2">
              Access comprehensive reports that detail performance metrics, trends, and recommendations.
            </p>
            <p className="data-collection-we">
              Implementation
            </p>
            <p className="text-wrapper-2">
              Utilize the insights and recommendations to implement targeted educational strategies and interventions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
