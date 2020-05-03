const TABLE_NAME = 'AuthorBooks';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(TABLE_NAME, {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            AuthorId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Authors',
                    key: 'id'
                }
            },
            BookId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Books',
                    key: 'id'
                }
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable(TABLE_NAME);
    }
};