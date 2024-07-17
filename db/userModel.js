import { Schema, model } from 'mongoose';
const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Please provide a Name"],
        unique: false
    },
    phone:{
        type:String,
        required:[false],
        unique: false
    },
    email:{
        type:String,
        required:[true,"Please provide an Email"],
        unique:[true,"Email Exist"]
    },
    password:{
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    }
})
export default model.Users||model("Users",userSchema);