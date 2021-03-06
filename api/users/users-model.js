const db = require('../data/db-config');

function getUsers() {
    return db("users")
}

function findBy(filter) {
    return db('users')
        .where(filter)
}

function findById(id) {
    return db('users')
        .where('user_id', id)
        .first()
}

function removeUser(id) {
    return db('users')
        .where('user_id', id)
        .del()
}

async function add(user) {
    const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
    return newUserObject
}

async function update(user_id, user) {
    await db('users')
        .where({ 'user_id': user_id })
        .update(user)
    return findById(user_id)
}

module.exports = {
    getUsers,
    findBy,
    findById,
    add,
    removeUser,
    update
};
