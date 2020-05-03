const sequelize = require('../connection/sequelize');

const DataTypes = sequelize.constructor;

const model = {
    fields: {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        publisherName: DataTypes.STRING(1000),
        publicationDate: DataTypes.DATE,
        licenseRights: DataTypes.STRING(1000),
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
};

const Publisher = sequelize.define('Publisher', model.fields);

module.exports = Publisher;
module.exports.associate = ({ Book }) => {
    Publisher.hasOne(Book, { onDelete: 'cascade', onUpdate: 'cascade' });
};
