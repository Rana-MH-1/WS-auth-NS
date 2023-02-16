const Post  = require('../Models/PostModel')
const cloudinary = require('../Config/cloudinary')

const AddPost = async(req,res)=>{
    try {
        const {title, Des} = req.body
        const savedImage = await cloudinary.uploader.upload(req.files.Image.tempFilePath)
        const newPost = await Post.create({title,Des,owner:req.userId,Image:{public_id:savedImage.public_id,imgUrl:savedImage.url }})
        res.json(newPost)
    } catch (error) {
        res.status(501).json({message: error })
    }
}

const getAllPosts = async(req,res)=>{
    try {
        const posts = await Post.find({}).populate({path:'owner', select:'-password -__v'})
        res.json(posts)
    } catch (error) {
        res.status(501).json({message: error })
    }
}

module.exports = {AddPost,getAllPosts}