
const {getUsers, addUser} = require('./repository');

const usersController = async (req, res) => {
    if (req.method === 'POST') {
        let result = await addUser('Alexey');
        res.write(JSON.stringify({success: true}));
        res.end()
    } else {
        let users = await getUsers();
        res.write(JSON.stringify(users));
        res.end()
    } 
}

exports.usersController = usersController