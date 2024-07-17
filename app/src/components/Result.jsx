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
//     <div className="result">
//       <div className="div-2">
        
//         <div className="nav-bar">
//           <div className="block">
//             <div className="logo">
//               <div className="div-wrapper">
//                 <div className="text-wrapper-2">Student Performance Analysis</div>
//               </div>
//             </div>
//             <div className="menu">
//               <div className="nav-menu">
//                 <div className="about">
//                   <div className="text-wrapper-3">About Analysis</div>
//                   <img className="vector" alt="Vector" src={ Vector} />
//                 </div>
//                 <div className="test">
//                   <div className="text-wrapper-3">Test Your Score</div>
//                   <img className="vector" alt="Vector" src={ Vector} />
//                 </div>
//                 <div className="history">
//                   <div className="text-wrapper-3">History</div>
//                   <img className="vector" alt="Vector" src={ Vector} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="overlap">
//           <div className="register">
//             <div className="title">
//               <div className="text-wrapper-4">Student Performance Analysis</div>
//               <p className="text-wrapper-5">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam duis vitae curabitur amet, fermentum
//                 lorem.
//               </p>
//             </div>
//             <div className="form">
//               <div className="input-group">
//                 <div className="frame-4">
//                   <div className="input">
//                     <div className="input-title-section">
//                       <div className="input-section">
//                         <div className="overlap-group-2">
//                           <div className="input-items-group-wrapper">
//                             <div className="input-items-group">
//                               <div className="placeholder">Your name</div>
//                             </div>
//                           </div>
//                           <div className="mini-title-contaier">
//                             <div className="title-2">First name</div>
//                             <div className="text-wrapper-6">*</div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="input">
//                     <div className="input-title-section">
//                       <div className="input-section">
//                         <div className="overlap-group-2">
//                           <div className="input-items-group-wrapper">
//                             <div className="input-items-group">
//                               <div className="placeholder">Your last name</div>
//                             </div>
//                           </div>
//                           <div className="mini-title-contaier">
//                             <div className="title-2">Last name</div>
//                             <div className="text-wrapper-6">*</div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="input-title-section-wrapper">
//                   <div className="input-title-section">
//                     <div className="input-section">
//                       <div className="overlap-group-3">
//                         <div className="input-items-group-wrapper">
//                           <div className="input-items-group">
//                             <div className="placeholder">yourmail@gmail.com</div>
//                           </div>
//                         </div>
//                         <div className="mini-title-contaier">
//                           <div className="title-2">E-mail</div>
//                           <div className="text-wrapper-6">*</div>
//                         </div>
//                       </div>
//                       <div className="input-right-section">
//                         <img className="icon-duotone" alt="Icon duotone" src={Envelope} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="input-title-section-wrapper">
//                   <div className="input-title-section">
//                     <div className="input-section">
//                       <div className="overlap-group-3">
//                         <div className="input-items-group-wrapper">
//                           <div className="input-items-group">
//                             <img className="flag-container" alt="Flag container" src={mdi} />
//                             <div className="placeholder-2">Your Gender</div>
//                           </div>
//                         </div>
//                         <div className="mini-title-contaier">
//                           <div className="title-2">Gender</div>
//                         </div>
//                       </div>
//                       <div className="input-right-section">
//                         <img className="icon-duotone" alt="Icon duotone" src={CaretDown} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
               
//                 <div className="input-title-section-wrapper">
//                   <div className="input-title-section">
//                     <div className="input-section">
//                       <div className="overlap-group-3">
//                         <div className="input-items-group-wrapper">
//                           <div className="input-items-group">
//                             <p className="placeholder-3">DD / MM / YYYY</p>
//                           </div>
//                         </div>
//                         <div className="mini-title-contaier">
//                           <div className="title-2">Birthday</div>
//                         </div>
//                       </div>
//                       <div className="input-right-section">
//                         <img className="icon-duotone" alt="Icon duotone" src={CalendarBlank} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="input-title-section-wrapper">
//                   <div className="input-title-section">
//                     <div className="input-section">
//                       <div className="overlap-group-2">
//                         <div className="input-items-group-wrapper">
//                           <div className="input-items-group">
//                             <div className="placeholder">Enter Field No 1</div>
//                           </div>
//                         </div>
//                         <div className="mini-title-contaier">
//                           <div className="title-2">Field&nbsp;&nbsp;No 1</div>
//                           <div className="text-wrapper-6">*</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="input-title-section">
//                 <div className="input-section">
//                   <div className="overlap-group-2">
//                     <div className="input-items-group-wrapper">
//                       <div className="input-items-group">
//                         <div className="placeholder">Enter Field No 1</div>
//                       </div>
//                     </div>
//                     <div className="mini-title-contaier">
//                       <div className="title-2">Field&nbsp;&nbsp;No 1</div>
//                       <div className="text-wrapper-6">*</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="input-title-section">
//                 <div className="input-section">
//                   <div className="overlap-group-2">
//                     <div className="input-items-group-wrapper">
//                       <div className="input-items-group">
//                         <div className="placeholder">Enter Field No 1</div>
//                       </div>
//                     </div>
//                     <div className="mini-title-contaier">
//                       <div className="title-2">Field&nbsp;&nbsp;No 1</div>
//                       <div className="text-wrapper-6">*</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="input-title-section">
//                 <div className="input-section">
//                   <div className="overlap-group-2">
//                     <div className="input-items-group-wrapper">
//                       <div className="input-items-group">
//                         <div className="placeholder">Enter Field No 1</div>
//                       </div>
//                     </div>
//                     <div className="mini-title-contaier">
//                       <div className="title-2">Field&nbsp;&nbsp;No 1</div>
//                       <div className="text-wrapper-6">*</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="input-title-section-2" />
//             </div>
//             <button className="add-to-cart-wrapper">
//               <div className="add-to-cart">Enter</div>
//             </button>
//           </div>
//           <Modal className="modal-05" />
//         </div>
//         <div className="text-wrapper-7">Student Performance Analysis Form</div>
//       </div>
//     </div>
//   );
// };

export default Result;
