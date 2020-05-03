const Sequelize = require('sequelize');
const options = require('../config/config');

const {
    database,
    username,
    password,
    host,
    dialect,
    charset,
} = options;

const connection = new Sequelize(database, username, password, {
    host,
    dialect,
    charset,
    collate: 'utf8_general_ci',
});

module.exports = connection;