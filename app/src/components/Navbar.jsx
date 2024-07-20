import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { Container, Modal } from "react-bootstrap";
import { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
const cookies = new Cookies();


function Navbar1({props}){
    const nav=useNavigate();
    const link=`${props}`
    const token=cookies.get("TOKEN")
    const logout=()=>{
        cookies.remove("TOKEN");
        nav("/login");
    }
    const [show,setShow]=useState(false)
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <>
        <Navbar expand="lg"  id="nav">
            <Container className="block d-flex justify-content-between align-items-center" >
                <Navbar.Brand className="Logo d-flex justify-content-center align-items-center">
                    <div className="Name " >Student Performance Analysis</div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex justify-content-between" style={{margin:"auto",}} >
                        <Nav.Link className="About" >About Analysis</Nav.Link>
                        <Nav.Link className="Test" ><Link to={link} style={{textDecoration:"none"}}>Test Your Score</Link></Nav.Link>
                        <Nav.Link className="History" >History</Nav.Link>
                        <div className="Btns d-flex justify-content-center align-items-center">
                            {token?<div className="logout d-flex justify-content-center align-items-center" >
                            <button onClick={handleShow} style={{border:"none",margin:"auto"}}>
                            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{backgroundColor:"#043873"}}>
                            <path fillRule="evenodd" clipRule="evenodd" d="M32.5 18C32.5 20.1217 31.6571 22.1566 30.1569 23.6569C28.6566 25.1571 26.6217 26 24.5 26C22.3783 26 20.3434 25.1571 18.8431 23.6569C17.3429 22.1566 16.5 20.1217 16.5 18C16.5 15.8783 17.3429 13.8434 18.8431 12.3431C20.3434 10.8429 22.3783 10 24.5 10C26.6217 10 28.6566 10.8429 30.1569 12.3431C31.6571 13.8434 32.5 15.8783 32.5 18ZM28.5 18C28.5 19.0609 28.0786 20.0783 27.3284 20.8284C26.5783 21.5786 25.5609 22 24.5 22C23.4391 22 22.4217 21.5786 21.6716 20.8284C20.9214 20.0783 20.5 19.0609 20.5 18C20.5 16.9391 20.9214 15.9217 21.6716 15.1716C22.4217 14.4214 23.4391 14 24.5 14C25.5609 14 26.5783 14.4214 27.3284 15.1716C28.0786 15.9217 28.5 16.9391 28.5 18Z" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M24.5 2C12.35 2 2.5 11.85 2.5 24C2.5 36.15 12.35 46 24.5 46C36.65 46 46.5 36.15 46.5 24C46.5 11.85 36.65 2 24.5 2ZM6.5 24C6.5 28.18 7.926 32.028 10.316 35.084C11.9945 32.8798 14.1598 31.0935 16.6429 29.8646C19.1259 28.6358 21.8595 27.9976 24.63 28C27.3647 27.9974 30.0638 28.619 32.5219 29.8176C34.9799 31.0161 37.1319 32.7598 38.814 34.916C40.5469 32.6432 41.7137 29.9904 42.2178 27.1772C42.7219 24.3639 42.5489 21.4711 41.713 18.738C40.8771 16.0049 39.4024 13.5101 37.411 11.4601C35.4195 9.41005 32.9685 7.86372 30.2608 6.94902C27.553 6.03432 24.6664 5.77754 21.8397 6.19995C19.013 6.62235 16.3276 7.71178 14.0055 9.37811C11.6835 11.0444 9.79162 13.2397 8.48646 15.7824C7.18129 18.325 6.50036 21.1419 6.5 24ZM24.5 42C20.3679 42.0062 16.3605 40.5847 13.156 37.976C14.4459 36.1295 16.1627 34.6218 18.1604 33.5814C20.1581 32.5409 22.3776 31.9984 24.63 32C26.8543 31.9982 29.047 32.5271 31.0259 33.5428C33.0047 34.5585 34.7127 36.0317 36.008 37.84C32.7786 40.5334 28.7052 42.0059 24.5 42Z" fill="white"/>
                            </svg>
                            </button>
                            <div className="modal fade" tabindex="-1" role="dialog" id="Modal" aria-labelledby="ModalLabel" aria-hidden="true">
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title id="ModalLabel">Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body class="modal-body">
                                    <p>Hello User</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <button type="button" class="btn btn-primary" onClick={handleClose}>Close</button>
                                    <button type="button" class="btn btn-primary" onClick={logout}>Logout</button>
                                </Modal.Footer>
                            </Modal>
                            </div>
                            </div>:<div className="Btn-Login btn m-2 " style={{width:"40%",height:"50%",margin:"auto"}}><div className="login"><Link to="/login">Login</Link></div></div>}
                            {link==="register" &&
                            <div className="Btn-Free btn m-2 d-flex" style={{gap:"1.0rem",marginTop:"auto",marginBottom:"auto"}}><p style={{margin:"auto"}}><Link to={link} style={{textDecoration:"none",color:"white"}}>Try this out for free</Link></p><div className="d-flex align-items-center"><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"1.5vw"}}>
                                <path d="M1 8.08984H15" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 1.08984L15 8.08984L8 15.0898" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg></div>
                            </div> }  
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}
export default Navbar1;