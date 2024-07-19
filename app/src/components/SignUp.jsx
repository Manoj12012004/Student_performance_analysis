import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import Axios,{ AxiosError } from "axios";
import image1 from "./Asessts/Login/image1.jpeg";
import image2 from "./Asessts/Login/image3.png";
import image3 from "./Asessts/Login/image4.jpeg";

function SignUp(){
    const nav=useNavigate();
    const [passErr,setPassErr]=useState("")
    const [register, setRegister] = useState(false)
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        phone:""
    })
    const configuration = {
        method: "post",
        url: "https://student-performance-analysis-2pi7.onrender.com/register",
        data: {
            name: user.name,
            phone: user.phone,
            email: user.email,
            password: user.password,
        },
      };
    
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setUser((prevState)=>({...prevState,[name]:value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
        if (!passwordPattern.test(user.password)) {
            setPassErr("Password is not valid");
            return;
        }
        Axios(configuration).then((result)=>{
            nav("/login")
            setRegister(true)
            console.log(result)}).catch((error)=>{
                if (error && error instanceof AxiosError){
                    setPassErr(error.response?.data.message)
                }
                console.log(error)})
        
    }
    return(
        <>
        <div className="signup container">
        <div className="row no-gutters">
            <div className="col-md-6 col-sm-12 bg-primary text-white p-5 d-flex flex-column justify-content-center">
                <div className="text-center">
                    <h2 className=" bg-white text-dark rounded-pill heading">Student Performnace Analaysis</h2>
                    <h4 className="subheading">Welcome to Student Performance Analaysis</h4>
                    <p className="para">We understand the value of Student Performance in shaping for success.</p>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={image1} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={image2} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={image3} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-sm-12 p-5 d-flex align-items-center">
                <div className="w-100">
                    <div className="text-center mb-4">
                        <h4>Sign up with Us</h4>
                        <p>Empower your experience, sign up for account today</p>
                    </div>
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        {register ? (
                        <p className="text-success">You Are Registered Successfully</p>
                        ) : (
                        <p className="text-danger">You Are Not Registered</p>
                        )}
                        <div className="form-group">
                            <label className="fw-bold" htmlFor="fullName">Full Name<span className="star">*</span></label>
                            <input type="text" className="form-control" id="fullName" placeholder="ex. John Doe" name="name" value={user.name} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label className="fw-bold" htmlFor="email">Email<span className="star">*</span></label>
                            <input type="email" className="form-control" id="email" placeholder="ex. email@domain.com" name="email" value={user.email} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label  htmlFor="phoneNumber">Phone Number<span className="star">*</span></label>
                            <div className="input-group">
                                <div className="input-group-prepend" >
                                    <select className="custom-select" style={{height:"100%",backgroundColor:"white",border:"0",borderRadius:"16px"}}>
                                        <option value="+91">+91</option>
                                        <option value="+1">+1</option>
                                    </select>
                                </div>
                                <input type="tel" className="form-control" id="phoneNumber" placeholder="Enter phone number" name="phone" value={user.phone} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password<span className="star">*</span></label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" value={user.password} onChange={handleChange}/>
                            <small className="form-text text-muted">
                                <div className="password-criteria">
                                    <span> <p> <i className='bx bxs-check-circle'></i> One lowercase character</p></span>
                                    <span> <p> <i className='bx bxs-check-circle'></i> One uppercase character</p></span>
                                    <span> <p> <i className='bx bxs-check-circle'></i> 8 characters minimum</p></span>
                                    <span> <p><i className='bx bxs-check-circle'></i>  One number</p></span>
                                    <span> <p> <i className='bx bxs-check-circle'></i> One special character</p></span>
                                </div>
                                <div className="passError text-danger">
                                    {passErr===""?"":passErr}
                                </div>
                            </small>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" onClick={(e)=>handleSubmit(e)}>Get started free</button>
                        <div className="text-center mt-3">
                            <p>Already have an account? <Link to="/login">Login</Link></p>
                        </div>
                        <p className="text-center small">
                            By registering for an account, you are consenting to our <Link to="#">Terms of Service</Link> and confirming that you have reviewed and accepted the <Link to="#">Global Privacy Statement</Link>.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default SignUp;
