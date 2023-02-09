const User = require('../Models/UserModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config()

// sign up //create an account 
const Register = async(req,res)=>{
    try {
        
        const {name,email,age,password} = req.body
        //verifier si l'utilisateur a déjà du compte au non
        const isfound = await User.findOne({email})
        if(isfound){
            return res.status(401).json({message: 'User already exists !'})
        }

        //hashing password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({name,age,email,password:hashedPassword })
        res.status(200).json({newUser, msg:'User created successfully'})


    } catch (error) {
        res.status(501).json({message: error })
    }
} 

// Sign In
 const Login = async(req,res)=>{
    try {
        
        const {email, password} = req.body
        const isfound = await User.findOne({email})
        if(!isfound){
            return res.status(402).json({message:'You have to register before!'})
        }
        // compare the password typed from the user (req.body) vs password saved in the DB
        const isMatch = await bcrypt.compare(password, isfound.password);
        if(!isMatch){
            return res.status(401).json({message:'wrong password!'})
        }
        //generate token 
        const token = jwt.sign({ id: isfound._id  }, process.env.SECRET,{expiresIn:'30d'});
        res.status(201).json({token,isfound})

    } catch (error) {
        res.status(501).json({message: error })

    }
}

const getAllDataUsers = async(req,res)=>{
    try {
        const users = await User.find({})
        res.status(202).json(users)
    } catch (error) {
        res.status(501).json({message: error })

    }
}

module.exports = {Register,Login,getAllDataUsers}