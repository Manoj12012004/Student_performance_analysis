import pkg from "bcryptjs";
import User from "./db/userModel.js";
import express from 'express';
import cors from 'cors';
import dbConnect from "./db/dbConnect.js";
import jwt from "jsonwebtoken";
import auth from './auth.js';
import dotenv from "dotenv";
import { spawn } from 'child_process';

dotenv.config(); // Load environment variables at the beginning

const { hash, compare } = pkg;

const childPython = spawn('python', ['./app.py']);
childPython.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});

const app = express();

const allowedOrigins = [
  'https://student-performance-analysis-front.onrender.com',
  'http://localhost:3000'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true // Allow cookies to be sent/received
}));

app.use(express.json());

dbConnect();

app.post("/register", async (request, response) => {
  try {
    const hashedPassword = await hash(request.body.password, 10);
    const newUser = new User({
      name: request.body.name,
      phone: request.body.phone,
      email: request.body.email,
      password: hashedPassword,
    });
    const result = await newUser.save();
    response.status(201).send({
      message: "User created successfully",
      result,
    });
  } catch (error) {
    response.status(500).send({
      message: "EmailID already exists",
      error,
    });
  }
});

app.post("/login", async (request, response) => {
  try {
    const user = await User.findOne({ email: request.body.email });
    if (!user) {
      return response.status(404).send({ message: "Email not found" });
    }
    const passwordCheck = await compare(request.body.password, user.password);
    if (!passwordCheck) {
      return response.status(400).send({ message: "Password does not match" });
    }
    const token = jwt.sign(
      { userId: user._id, userEmail: user.email },
      process.env.JWT_SECRET || "RANDOM-TOKEN",
      { expiresIn: "24h" }
    );
    response.status(200).send({
      message: "Login Successful",
      email: user.email,
      token,
    });
  } catch (error) {
    response.status(400).send({
      message: "Error during login",
      error,
    });
  }
});

app.get("/free-endpoint", (request, response) => {
  response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/auth-endpoint", auth, (request, response) => {
  response.json({ message: "You are authorized to access me" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
