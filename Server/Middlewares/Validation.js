const { body } = require('express-validator');
const { validationResult } = require('express-validator')


exports.Validation = [
    body('email','please type a valid Email').isEmail(),
    body('password','password should be at least 6 caracters').isLength({min:6})
]

exports.ErrorValidation = async(req,res,next)=>{
    const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(401).json({errors : errors.mapped()})
        }
        next()
}