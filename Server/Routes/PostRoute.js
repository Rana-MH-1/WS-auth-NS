const express = require('express')
const { AddPost, getAllPosts } = require('../Controllers/PostController')
const router = express.Router()

router.post('/', AddPost)
router.get('/', getAllPosts)

module.exports = router