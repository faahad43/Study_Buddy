import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookies from "../utils/generateToken.js";


export const signup =async (req,res)=>{ 
    try{
        const {firstname,lastname,username,email,password,confirmPassword,gender}= req.body;

        if(password !== confirmPassword){
            return res.status(400).json({message:"The password doesn't match"})
        }

        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({message:"Username already exits."})
        }

        // avatar-placeholder
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        //hash the password
        const salt =await  bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        //Save user in database
        const newUser = new User({
            firstname,
            lastname,
            username,
            email,
            password: hashedPassword,
            gender,
            profilePic: gender ==='male' ? boyProfilePic : girlProfilePic
        })

        if(newUser){

            //Generate JWT Token
            generateTokenAndSetCookies(newUser._id,res);

            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                email: newUser.email,
                profilePic: newUser.profilePic
            })
        }else{
            res.send(400).json({error:"Invalid user data"});
        }

    } catch(error){
        console.log("Error in the signup controller",error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
   
}

export const login =async (req,res)=>{
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.send(400).json({error:'Invalid username or password'});
        }
        generateTokenAndSetCookies(user._id,res)

        res.status(200).json({
            _id:user._id,
            firstname:user.firstname,
            lastname:user.lastname,
            email:user.email,
            profilePic:user.profilePic
        })

    }catch(error){
        console.log("Error in the login controller",error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
   
}

export const logout =(req,res)=>{
    try{
        res.cookie('jwt',"",{maxAge:0});
        res.status(200),json({message:"Log out successfully."});
    }catch(error){
        console.log("Error in loging out.", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}