module.exports = {
    up: (queryInterface) => {
        return queryInterface.sequelize.query('CREATE INDEX book_title_index ON "Books" ("title")')
    },
    down: (queryInterface) => {
        return queryInterface.sequelize.query('DROP INDEX book_title_index')
    }
};
