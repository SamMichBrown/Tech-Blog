const { User } = require('../../models');

const userData = [
    {
        name: 'Sam'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;