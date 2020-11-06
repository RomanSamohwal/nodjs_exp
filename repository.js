const {readJsonFromFile} = require('./fs-utils');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String
})

const User = mongoose.model('MyUser', userSchema)


const getUsers = () => {
   return  User.find()
}

const deleteUser = ()

const addUser = async (name) => {
    let user = new User({name: name})
    return  user.save().then()


    //запись в файл
   /* let users = await getUsers()
    users.push({"id": 3, name})*/
    /*return writeJsonToFile("db", users)*/
}

exports.getUsers = getUsers
exports.addUser = addUser