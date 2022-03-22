const express = require("express")
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.MONGO_DB_URL)

const app = express();

//making our server accept json requests
app.use(express.json())


app.get('/', (req, res) => {
    res.send('hello world')
})

const postsRoutes = require('./routes/posts.routes');
const { default: mongoose } = require("mongoose");
app.use('/posts', postsRoutes)

app.listen(process.env.PORT)