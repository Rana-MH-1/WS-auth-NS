
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const { ConnectDB } = require('./Config/ConnectDB')
const userRouter = require('./Routes/UserRoute')
const { Validation } = require('./Middlewares/Validation')
dotenv.config()



mongoose.set('strictQuery', true)

app.use(express.json())
app.use('/api/users',Validation,userRouter)


ConnectDB()

const PORT = process.env.PORT || 7000;
app.listen(PORT, err=> err? console.log(err) : console.log(`Server is running on ${PORT}`))