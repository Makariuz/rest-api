const express = require("express");
const Post = require('../models/post.model')

const router = express.Router()

router.get('/', async (req, res) => {
    const posts = await Post.find()
    res.send(post)
})



router.post('/', async (req,res) => {
    const {title, content} = req.body
    const post = await Post.create({title, content})
    res.send(post)
})

router.delete('/:id', async (req, res) => {
    const id = req.params
    await Post.findByIdAndDelete(id)
    res.send(`post with id ${id} has been deleted`)
  })
module.exports = router