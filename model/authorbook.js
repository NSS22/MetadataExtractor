const sequelize = require('../connection/sequelize');

const DataTypes = sequelize.constructor;

const model = {
    fields: {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        AuthorId: DataTypes.INTEGER,
        BookId: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
};

const AuthorBook = sequelize.define('AuthorBook', model.fields);

module.exports = AuthorBook;
module.exports.associate = ({ Author, Book }) => {
    AuthorBook.belongsTo(Author, { foreignKey: 'AuthorId' });
    AuthorBook.belongsTo(Book, { foreignKey: 'BookId' });
};