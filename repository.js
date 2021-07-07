const users = [
    {id: 1, banned: true, name: 'Sasha'},
    {id: 2, name: 'Artem'}
];

const getUsers = () => {
    return users;
}

const addUser = (name) => {
    users.push({name: `${name}${users.length - 1}`});
}

exports.getUsers = getUsers;
exports.addUser = addUser;