
import User from "../models/User.js";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config();

export const protectRoute=async(req,res,next)=>{
    try {
        const token =req.cookies['jwt-usraa'];
        if(!token){
            return res.status(401).json({success:false,message:"Unauthorized -No token provided"})
        }

        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({success:false,message:"Unauthorized -No token provided"})
        
        }
        const user= await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(401).json({success:false,message:"user not found"})
        
        }
       req.user=user;

        next();
    } catch (error) {
          console.log('Error in protectRoute Middileware'+error.message);
        res.status(500).json({success:false,message:"Internal Server Error"})
        
    }
}

