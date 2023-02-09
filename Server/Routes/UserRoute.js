const express = require('express')
const router = express.Router();
const {Register, Login, getAllDataUsers} = require('../Controllers/UserController');
const { AuthMiddleWare } = require('../Middlewares/AuthMiddleware');
const { ErrorValidation } = require('../Middlewares/Validation');

router.post('/register', ErrorValidation,Register)
router.post('/login',ErrorValidation,Login)
router.get('/',AuthMiddleWare, getAllDataUsers)

module.exports = router