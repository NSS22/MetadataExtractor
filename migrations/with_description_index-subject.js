module.exports = {
    up: (queryInterface) => {
        return queryInterface.sequelize.query('CREATE INDEX subject_description_index ON "Subjects" ("description")')
    },
    down: (queryInterface) => {
        return queryInterface.sequelize.query('DROP INDEX subject_description_index')
    }
};
