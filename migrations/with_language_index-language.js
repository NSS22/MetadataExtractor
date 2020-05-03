module.exports = {
    up: (queryInterface) => {
        return queryInterface.sequelize.query('CREATE INDEX language_language_index ON "Languages" ("language")')
    },
    down: (queryInterface) => {
        return queryInterface.sequelize.query('DROP INDEX language_language_index')
    }
};
