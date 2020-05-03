const sequelize = require('../connection/sequelize');

const DataTypes = sequelize.constructor;

const model = {
    fields: {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        description: DataTypes.STRING(1000),
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
};

const Subject = sequelize.define('Subject', model.fields);

module.exports = Subject;
module.exports.associate = ({ Book }) => {
    Subject.hasMany(Book, { onDelete: 'cascade', onUpdate: 'cascade' });
};