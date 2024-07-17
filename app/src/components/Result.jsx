// import React from "react";
// import { Modal } from "../components/Modal";
// import "./Result.css";
// import CalendarBlank from '../CalendarBlank.svg';
// import Envelope from '../Envelope.svg';
// import CaretDown from '../CaretDown.svg';
// import mdi from '../mdi.svg';
// import Vector from '../Vector.svg';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Result(props){
return (
  <Modal {...props}>
      <Modal.Body className="custom-modal-body">
        <Modal.Header className="custom-close-button" closeButton />
      
        <div className="image-container">
          <img className="checkone" alt="checkone" src="#" />
        </div>
        <div className='botmar'>
          Successfully accepted!
        </div>
        <div className='botmari'>
          Result : {props.res}
        </div>
     
        <div className="d-grid gap-2">
          <Button
            variant="primary"
            size="lg"
            className="custom-button-lg custom-button-home"
          >
            HOME
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="custom-button-lg custom-button-generate"
          >
            Generate again
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}
export default Result;
