const express = require("express")
const dotenv = require('dotenv')
dotenv.config()

const app = express();

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(process.env.PORT)