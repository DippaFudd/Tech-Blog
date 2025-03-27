const { User } = require('../models');

const userData = [
    {
        username: 'Troyboy28',
        password: 'money23456',
    },
    {
        username: 'JennyDoe78',
        password: 'mario123',
    },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
