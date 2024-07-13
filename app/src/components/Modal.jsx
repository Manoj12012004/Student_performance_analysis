import React from "react";
import { Button } from "../components/Button";
import "./Modal.css";
import checkone from '../check-one.svg';
import cross from '../cross.svg';

export const Modal = ({ className }) => {
  return (
    <div className={`modal ${className}`}>
      <div className="frame">
        <div className="overlap-group">
          <div className="div">
            <img className="check-one" alt="Check one" src={checkone} />
       
            <div className="frame-2">
              <div className="text-wrapper">Successfully accepted!</div>
              <div className="paragraph">Result : 89.001</div>
            </div>
            <div className="frame-3">
              <Button className="button-instance" state="default" type="primary" />
              <Button className="button-instance" state="default" type="secondary" />
            </div>
          </div>
          <img className="img" alt="Frame" src={cross}/>
        </div>
      </div>
    </div>
  );
};

export default Modal;