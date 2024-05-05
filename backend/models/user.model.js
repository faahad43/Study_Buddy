import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                // Regular expression for email validation
                return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    gender:{
        type:String,
        required:true,
        enum:['male','female']
    },
    profilePic:{
        type:String,
        default:''
    }
},{timestamps:true});

const User = mongoose.model("User",userSchema);

export default User;

