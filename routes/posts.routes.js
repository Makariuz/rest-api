const express = require("express");
const Post = require('../models/post.model')

const router = express.Router()

router.get('/', async (req, res) => {
    const posts = await Post.find()
    res.send(posts)
})

router.post('/', async (req,res) => {
    const {title, content} = req.body
    const post = await Post.create({title, content})
    res.send(post)
})

router.get('/:id', async (req,res) => {
    const {id} = req.params
    const post = await Post.findById(id)
    res.send(post)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    await Post.findByIdAndDelete(id)
    res.send(`post with id ${id} has been deleted`)
})

//patch changes one specific part, like title
//put changes the whole object, like title && content

router.put('/:id', async (req,res) => {
    const {title, content} = req.body
    const {id} = req.params
    const post = await Post.findById(id)
    post.title = title
    post.content = content
    await post.save()
    res.send(post)
})

module.exports = router