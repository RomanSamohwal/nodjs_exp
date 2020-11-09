const {readJsonFromFile} = require('./fs-utils');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String
})

const User = mongoose.model('MyUser', userSchema)


const getUsers = (search) => {
    if (!search) {
        return User.find()
    } else {
        return User.find({name: new RegExp(search) })
    }
}

const getUser = (id) => {
    return User.find({_id: id})
}

const deleteUser = (id) => {
    return User.deleteOne({_id: id})
}

const updateUser = (id, name) => {
    return User.update({_id: id}, {name: name})
}

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
exports.deleteUser = deleteUser
exports.getUser = getUser
exports.updateUser = updateUser