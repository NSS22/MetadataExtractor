const _ = require('lodash');

const Author = require('./author');
const AuthorBook = require('./authorbook');
const Book = require('./book');
const Language = require('./language');
const Publisher = require('./publisher');
const Subject = require('./subject');

const models = {
    Author,
    AuthorBook,
    Book,
    Language,
    Publisher,
    Subject,
};

_.forEach(models, (model) => {
    if (model.associate) {
        model.associate(models);
    }
});

module.exports = models;