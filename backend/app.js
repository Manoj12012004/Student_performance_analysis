import pkg from "bcryptjs";
import User from "./db/userModel.js";
import express from 'express';
import cors from 'cors';
import dbConnect from "./db/dbConnect.js";
import jwt from "jsonwebtoken";
import auth from './auth.js';
import dotenv from "dotenv"
import { spawn } from 'child_process';

const {hash,compare}=pkg

const childPython=spawn('python',['./app.py'])
childPython.on('close',(Code)=>{
    console.log(Code)
})
const app=express()
const allowedOrigins = ['https://student-performance-analysis-front.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
}));
app.use(express.json())
dbConnect();
dotenv.config()
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});
app.options('*', cors());




app.post("/register",async(request,response)=>{
    hash(request.body.password,10).then((hashedPassword)=>{
        const newUser=new User({
            name:request.body.name,
            phone:request.body.phone,
            email:request.body.email,
            password:hashedPassword,
        })
        newUser.save().then((result)=>{
            response.status(201).send({
                message:"User created successfully",
                result,
            })
        }).catch((error)=>{
            response.status(500).send({
                message:"Error creating user",error,
            })
        })
    }).catch((e)=>{
        response.status(500).send({
            message:"Password not hashed successfully",
            e,
        })
    })
})
app.post("/login",async(request,respone)=>{
    await User.findOne({email:request.body.email}).then((user)=>{
        compare(request.body.password,user.password).then((passwordCheck)=>{
        if(!passwordCheck){
            return respone.status(400).send({
                message:"Password does not match",
                error,
            })
        }
        const token=jwt.sign({
            userId:user._id,
            userEmail:user.email,
        },
        "RANDOM-TOKEN",{
            expiresIn:"24h"
        }   
    )
    respone.status(200).send({
        message:"Login Successful",
        email:user.email,
        token,
    })
    }).catch((error)=>{
        respone.status(400).send({
            message:"Password does not match",error
        })
    })    
   })
   .catch((error)=>{
    respone.status(404).send({
        message:"Email not found",
        error,
    })
   })
})
app.get("/free-endpoint", (request, response) => {
    response.json({ message: "You are free to access me anytime" });
});
  
  // authentication endpoint
app.get("/auth-endpoint",auth, (request, response) => {
response.json({ message: "You are authorized to access me" });
});
app.listen(process.env.PORT,()=>{
    console.log(`${process.env.PORT} is running`)
})
