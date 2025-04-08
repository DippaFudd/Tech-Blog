const { Sequelize } = require('sequelize');
require('dotenv').config(); // Ensure dotenv is required to load environment variables

// Use DATABASE_URL from environment variables for PostgreSQL
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false, // Disable logging for production, you can enable for debugging
});

module.exports = sequelize;

