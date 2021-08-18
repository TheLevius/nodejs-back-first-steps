// create express app
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://levius:getaccess@netherlandsazurecluster.3adpc.mongodb.net/study-app',
    { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: ಠ_ಠ'));
db.once('open', () => {
    console.log(`MongoDB connected`)
})

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

app.listen(process.env.PORT, function () {
    console.log(`---> App is listening on port ${process.env.PORT} <---`)
})