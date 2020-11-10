const express = require('express')
const users = require('./users-router')
const cors = require('cors')
const bodyParser = require('body-parser');

const mongodbAtlas = 'mongodb+srv://roman:mongodb@cluster0.qombh.mongodb.net/easycode?retryWrites=true&w=majority'
const monodblocal = 'mongodb://localhost/users'

const mongoose = require('mongoose');
mongoose.connect(mongodbAtlas,{useNewUrlParser: true}).then(()=>{
    console.log("MongoDB connected")
})


const db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error'))
db.once('open', function (){

})


const app = express()
const port = process.env.PORT

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/users',users)

app.get('/tasks', async (req, res) => {
    res.send("tasks tasks Roman")
})

app.use((req, res) => {
    res.send(404)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:` + process.env.PORT)
})

