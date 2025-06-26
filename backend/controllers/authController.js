import { generateToken } from "../lib/utils.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt"

export const signUp= async (req,res)=>{
    const {fullName, email,password}=req.body;
    try{
            if(!fullName || !email || !password){
                 return res.status(400).json({message:"All field Required"});
            }
            if(password.length<5)
            {
                 return res.status(400).json({message:"password must be  atleast 6 character"});
            }
            const user= await User.findOne({email});
            if (user) return res.status(400).json({ message: "Email already exists" });
            const hashedPassword= bcrypt.hashSync(password,10);
            const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });
      if(newUser)
      {
        generateToken(newUser._id,res);
        await newUser.save();
        res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
      });
      }
      else{
        return res.status(400).json({message:"Invalid User Data"});
      }

    }
    catch(err)
    {
        res.status(500).json({message: err.message});
    }
}

export const login =async(req,res)=>{
    const {email,password}=req.body;
    try{
         const user= await User.findOne({email});
         if(!user)
         {
            res.status(400).json({message:"User does not exists"});
         }
         const verified = bcrypt.compareSync(password,user.password);
         if(!verified)
         {
            res.status(400).json({message:"Invalid User Credentials"});
         }
         generateToken(user._id,res);
         return res.status(200).json({
            _id: user._id,
           email: user.email,
     
         })
    }
    catch(err)
    {
        res.status(500).json({message: err.message});
    }
}