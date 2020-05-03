module.exports = {
    up: (queryInterface) => {
        return queryInterface.sequelize.query('CREATE INDEX publication_date_index ON "Publishers" ("publicationDate")')
    },
    down: (queryInterface) => {
        return queryInterface.sequelize.query('DROP INDEX publication_date_index')
    }
};