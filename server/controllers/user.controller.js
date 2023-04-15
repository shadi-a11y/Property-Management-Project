import User from '../mongodb/models/user.js';
import bcrypt from 'bcrypt';
import validator from 'validator';
import jwt from 'jsonwebtoken';

const signToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

const createSendToken = (user, statusCode, res, msg) => {
    const token = signToken(user._id);

    res.status(statusCode).json({
        status: "success",
        token,
        userID: user._id,
        data: {
            message: msg,
            user,
        },
    })
}

const getAllUsers = async(req, res) => {
    try {
        //Pass a full query to the find method
        //The end of the list is the limit
        const users = await User.find({}).limit(req.query._end);

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createUser = async(req, res) => {
    try{
        const { email, name, password, avatar } = req.body;

        if(!validator.isEmail(email)){  
            return res.status(400).json({message: "Invalid email."});
        }

        const userExists = await User.findOne({ email });

        // Check if the user already exists in the database
        //If the user exists
        if(userExists) return res.status(409).json({
            message: "User with such email already exists",
            userExists
        });
        const salt = await bcrypt.genSalt(12);
        const hashedPass = await bcrypt.hash(password, salt)

        //If the user doesn't exist
        const newUser = await User.create({
            name: name,
            email: email,
            password: hashedPass,
            // avatar: avatar
        })

        let msg = "User created successfully";
        createSendToken(newUser, 201, res, msg);
    }
    catch(error)
    {
        res.status(500).json({ message: error.message });
    }
};

//for login
const loginUser = async(req,res) =>{
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user){
            return res.status(404).json({message: "The user doesn't exist."}) 
        }

        if(!(await user.checkPassword(req.body.password, user.password))){
            return res.status(401).json({message: "Incorrect email or password"})
        }

        let msg = 'You are logged in successfully';
        createSendToken(user, 200, res, msg);

    }catch(err){
        console.log(err);
    }
}

const getUserInfoByID = async(req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findOne({ _id: id }).populate("allProperties");

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" }); 
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
    getAllUsers,
    createUser,
    loginUser,
    getUserInfoByID,
}