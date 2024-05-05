import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const JWT_SECRET = 'MkBLC3SSBtvLu/xImZwlPeuG9E/sVRiR/v5tV3MJIZ4=';

const protectRoute =async (req,res,next)=>{
    try{

        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unauthorized- No Token"}); 
        }

        const decode = jwt.verify(token,JWT_SECRET);
        if(!decode){
            return res.status(401).json({error:"Unauthorized- Invalid Token"});
        }

        const user = await User.findById(decode.userId).select("-password");

        req.user= user;

        next();

    }catch(error){
        console.log("Error in the protect route middleware",error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export default protectRoute;