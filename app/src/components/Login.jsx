import "./Login.css";
import "bootstrap";
import loginImg4 from "../components/Asessts/Login/image4.jpeg";
import loginImg3 from "./Asessts/Login/image3.png";
import loginImg1 from "./Asessts/Login/image1.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";
import  Axios, { AxiosError }  from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

function Login(){
    const [err,setErr]=useState("")
    const [wait,setWait]=useState(false)
    const nav = useNavigate();
    const cookies=new Cookies();
    const [loginUser,setloginUser]=useState({
        email:"",
        password:""
    })
    const [login,setLogin]=useState(false)
    const handleChange = (e) =>{
        const {name,value}=e.target
        setloginUser((prevState)=>({...prevState,[name]:value}))
    }
    const configuration={
        method:"post",
        url: "https://student-performance-analysis-2pi7.onrender.com/login",
        data:{
            email:loginUser.email,
            password:loginUser.password
        },
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setWait(true);
        await Axios(configuration).then((result)=>{
            cookies.set("TOKEN", result.data.token, {
                path: "/",
              });
            nav("/auth");
            setLogin(true)
            setWait(false)}).catch((error)=>{
                if (error && error instanceof AxiosError){
                    setErr(error.response?.data.message)
                    setWait(false)
                }
            })
    }
    return(
        <div className="Login ">
        <div className="container row">
            <div className="col-md-6 col-sm-12 conatainer text-white bg-primary ">
                <div className="container d-flex flex-column justify-content-between" id="rightCol">
                    <div className="heading container d-flex flex-column justify-content-between">
                        <h2 className=" bg-white rounded-pill p-1" style={{color:"#043873",fontSize:"1.8rem"}}>Student Performnace Analaysis</h2>
                        <div><h4 className="subheading" style={{fontSize:"2rem",textAlign:"left",lineHeight:"2.5rem",marginTop:"2rem"}}>Welcome to Student Performance Analaysis</h4>
                        <p className="para">We understand the value of Student Performance in shaping for success.</p>
                        </div>  
                    </div>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={loginImg1} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={loginImg3} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={loginImg4} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-sm-12 p-5 d-flex align-items-center">
                <div className="w-100">
                    <div className="text-center mb-3">
                        <h4>Welcome Back!</h4>
                        <p>Please Login to Access Your Account</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {login ? (
                            <p className="text-success">You Are Logged in Successfully</p>
                            ) : (
                            <p className="text-danger">{err === ""?"":err}</p>
                        )}
                        <div className="form-group">
                            <label htmlFor="email">Email<span className="star">*</span></label>
                            <input type="email" className="form-control" id="email" placeholder="ex. email@domain.com" name="email" value={loginUser.email} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password<span className="star">*</span></label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" value={loginUser.password}  onChange={handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block p-3 m-4" onClick={handleSubmit} style={{width:"60%"}}>{wait?"Please Wait":"Login"}</button>
                        <div className="text-center mt-3">
                            <p>Don't have an account yet? <Link to="/register">Sign up</Link></p>
                            {/* <p>Forgot Password? < href="#">Reset Now</></p> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Login;
