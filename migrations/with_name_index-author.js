module.exports = {
    up: (queryInterface) => {
        return queryInterface.sequelize.query('CREATE INDEX author_name_index ON "Authors" ("authorName")')
    },
    down: (queryInterface) => {
        return queryInterface.sequelize.query('DROP INDEX author_name_index')
    }
};
