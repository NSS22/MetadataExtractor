const sequelize = require('../connection/sequelize');

const DataTypes = sequelize.constructor;

const model = {
    fields: {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        authorName: DataTypes.STRING(1000),
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
};

const Author = sequelize.define('Author', model.fields);

module.exports = Author;
module.exports.associate = ({ AuthorBook, Book }) => {
    Author.belongsToMany(Book, { through: AuthorBook, foreignKey: 'AuthorId' });
};