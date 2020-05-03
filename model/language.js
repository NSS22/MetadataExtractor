const sequelize = require('../connection/sequelize');

const DataTypes = sequelize.constructor;

const model = {
    fields: {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        language: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
};

const Language = sequelize.define('Language', model.fields);

module.exports = Language;
module.exports.associate = ({ Book }) => {
    Language.hasOne(Book, { onDelete: 'cascade', onUpdate: 'cascade' });
};
