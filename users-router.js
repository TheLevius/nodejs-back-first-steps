
const {getUsers, addUser} = require('./repository');

const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.get('/', async (req, res) => {
    let users = await getUsers();
    if (!!req.query.search) {
        users = users.filter(u => u.name.indexOf(req.query.search) > -1)
    }

    res.send(users)
})
router.get('/:id', async (req, res) => {
    let users = await getUsers();
    let user = users.find(u => u.id == req.params.id)
    if (user) {
        res.send(user);
    } else {
        res.send(404)
    }
    
});

router.post('/', async (req, res) => {
    await addUser(req.body.name)
    .then((resolve) => {
        res.send(JSON.stringify({success: true}));
    })
    
});

module.exports = router;