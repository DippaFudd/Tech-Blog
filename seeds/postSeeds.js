const { Post } = require('../models');

const postData = [
    {
        title: 'Exploring the MVC Pattern',
        content: 'The Model-View-Controller (MVC) pattern helps organize code by separating concerns into three interconnected components.',
        user_id: 1  
    },
    {
        title: 'Getting Started with Sequelize',
        content: 'Sequelize is a powerful ORM that simplifies database operations in Node.js applications.',
        user_id: 2
    },
    {
        title: 'Mastering ES6 Syntax',
        content: 'ES6 introduced modern JavaScript features like arrow functions, template strings, and destructuring for cleaner code.',
        user_id: 1
    },
    {
        title: 'Demystifying the Node.js Event Loop',
        content: 'The Node.js event loop enables asynchronous programming by handling non-blocking I/O operations efficiently.',
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

