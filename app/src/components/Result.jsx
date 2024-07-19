import React from 'react';
import { Button,Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Result(props){
  const nav= useNavigate();
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
            onClick={()=>{nav("/auth")}}
          >
            HOME
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="custom-button-lg custom-button-generate"
            onClick={()=>{nav("/auth/input_form")}}
          >
            Generate again
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}
export default Result;
