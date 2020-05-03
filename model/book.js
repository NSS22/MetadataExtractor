const sequelize = require('../connection/sequelize');

const DataTypes = sequelize.constructor;

const model = {
    fields: {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: DataTypes.STRING(1000),
        LanguageId: DataTypes.INTEGER,
        PublisherId: DataTypes.INTEGER,
        SubjectId: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
};

const Book = sequelize.define('Book', model.fields);

module.exports = Book;
module.exports.associate = ({ Author, AuthorBook, Language, Publisher, Subject }) => {
    Book.belongsToMany(Author, { through: AuthorBook, foreignKey: 'BookId' });
    Book.belongsTo(Language, { onDelete: 'cascade', onUpdate: 'cascade' });
    Book.belongsTo(Publisher, { onDelete: 'cascade', onUpdate: 'cascade' });
    Book.belongsTo(Subject, { onDelete: 'cascade', onUpdate: 'cascade' });
};