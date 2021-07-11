const {addUser, getUsers} = require('./repository');
// create express app
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/NodeStudyDB', {useNewUrlParser: true});

const users = require('./users-router');
const app = express();

// setup app
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({
    extended: true
  }))

app.use('/users', users);

app.get('/tasks', async (req, res) => {
    res.send(`<h1>Tasks</h1>`);
});

// intercepter
app.use((req, res) => {
    res.send({value: 404});
})
const portNumber = 7542;
app.listen(portNumber, function () {
    console.log(`---> App is listening on port ${portNumber} <---`)
})