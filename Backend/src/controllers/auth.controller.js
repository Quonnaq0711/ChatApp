import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body
    try {
        if (!fullName || !email || !password) {
            return res.status(400).json({ Message: "All fields are required" })
        }            

        if (password.length < 6) {
            return res.status(400).json({Message: "Pasword must be at least 6 characters"})
        }

        const user = await User.findOne({ email })
        if (user) return res.status(400).json({ Message: "User with this email already exists" })
        
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password, salt)
        
        const newUser = new User({
            fullName,
            email,
            password: hashedpassword
        })

        if (newUser) {
            generateToken(newUser._id, res)
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
            });
        } else {
            res.status(400).json({ Message:"Invalid User Data"})
        }
    } catch (error) {
        console.log('Error in singup controller', error.Message);
        res.status(500).json({ Message: 'Internal Server Error' });
   }
};

export const login = (req, res) => {
    res.send('login route');
};

export const logout = (req, res) => {
    res.send('logout route');
};