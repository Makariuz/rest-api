const mongoose = require('mongoose')
const { Schema, model } = mongoose

const postSchema = new Schema({
    title: String,
    content: String,
})

module.exports = model('Post', postSchema)