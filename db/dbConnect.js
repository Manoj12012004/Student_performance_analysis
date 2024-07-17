import { connect } from "mongoose";
import { config } from 'dotenv';
config()

async function dbConnect(){
    connect(process.env.DB_URL).then(()=>{
        console.log("Successfully connected to Atlas")
      }).catch((error)=>{
        console.log("Error")
        console.log(error)
      });
}
export default dbConnect;