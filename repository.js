//DAL Level
const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    name: String,    
    });
const User = mongoose.model('MyUser', userScheme);


const fs = require('fs');
const {readJsonFromFile, writeJsonToFile} = require('./fs-utils');

const filePath = 'db';

const getUsers = (search) => {
    if (!!search) {
        return User.find({name: new RegExp(search)})
    } else {
        return User.find()
    }

}
const getUser = (id) => {
    return User.find({_id: id})
}

const deleteUser = (id) => {
    return User.deleteOne({_id: id})
}
const updateUser = (id, name) => {
    return User.findOneAndUpdate({_id: id}, {name: name});
}

const addUser = async (name) => {
    let user = new User({name});
    return user.save()
}

exports.deleteUser = deleteUser;
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.addUser = addUser;
exports.updateUser = updateUser;