const express = require("express")
const dotenv = require('dotenv')
dotenv.config()

const app = express();

//making our server accept json requests
app.use(express.json())


app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(process.env.PORT)