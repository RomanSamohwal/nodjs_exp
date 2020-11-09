const express = require('express')
const users = require('./users-router')
const cors = require('cors')
const bodyParser = require('body-parser');

/*const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users',{useNewUrlParser: true});

const db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error'))
db.once('open', function (){

})*/


const app = express()
const port = process.env.PORT

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

/*app.use('/users',users)*/

app.get('/tasks', async (req, res) => {
    res.send("tasks tasks Roman")
})

app.use((req, res) => {
    res.send(404)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:` + process.env.PORT)
})

