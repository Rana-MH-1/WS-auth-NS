
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const { ConnectDB } = require('./Config/ConnectDB')
const userRouter = require('./Routes/UserRoute')
const PostRouter = require('./Routes/PostRoute')
const { Validation } = require('./Middlewares/Validation')
const { AuthMiddleWare } = require('./Middlewares/AuthMiddleware')
const fileUpload = require('express-fileupload')
dotenv.config()



mongoose.set('strictQuery', true)

app.use(express.json())
app.use(fileUpload({
    useTempFiles : true,
}));
app.use('/api/users',Validation,userRouter)
app.use('/api/posts',AuthMiddleWare,PostRouter )


ConnectDB()

const PORT = process.env.PORT || 7000;
app.listen(PORT, err=> err? console.log(err) : console.log(`Server is running on ${PORT}`))