
//Controller level
const {getUsers, addUser, getUser, deleteUser, updateUser} = require('./repository');

const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.get('/', async (req, res) => {
    let users = await getUsers(req.query.search);
    res.send(users);
})
router.get('/:id', async (req, res) => {
    const userId = req.params.id;
    const user = await getUser(userId);
    if (user) {
        res.send(user);
    } else {
        res.send(404)
    }
});


router.delete('/:id', async (req, res) => {
    try {
        await deleteUser(req.params.id)
        res.send(204)
    }
    catch {
        res.send(404)
    }
});

router.post('/', async (req, res) => {
    const name = req.body.name;
    await addUser(name);
    res.send({success: true});
});

router.put('/', async (req, res) => {
    const name = req.body.name;
    const id = req.body.id;
    await updateUser(id, name);
    res.send({success: true});
});

module.exports = router;