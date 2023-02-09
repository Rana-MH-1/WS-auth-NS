require('dotenv').config()
const jwt = require('jsonwebtoken')

exports.AuthMiddleWare = async(req,res,next)=>{
  const token = req.header('token')
  if(!token){
    res.status(403).json({message: 'You are not authorized!'})
  }
  const decoded = await jwt.verify(token, process.env.SECRET);
  req.userId = decoded.id 
  next()

}