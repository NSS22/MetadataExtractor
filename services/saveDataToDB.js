const _ = require('lodash');
const {
    Author,
    AuthorBook,
    Book,
    Language,
    Publisher,
    Subject,
} = require('../model');

const checkIfExistOrCreate = async ({ model, key, value, ...rest }) => {
    if (value) {
        const foundValue = await model.findOne({
            where: { [key]: value },
        });
        if (!foundValue) {
            const { id } = _.isEmpty(rest)
                ? await model.create({ [key]: value })
                : await model.create({ [key]: value, ...rest });
            return id;
        } else {
            const { id } = foundValue;
            return id;
        }
    }
};

const saveDataToDB = async (items) => {
    for (const item of items) {
        const { title, authorName, publisherName, publicationDate, language, subjects, licenseRights } = item;

        const LanguageId = await checkIfExistOrCreate({ model: Language, key: 'language', value: language });

        const PublisherId = await checkIfExistOrCreate({
            model: Publisher,
            key: 'publisherName',
            value: publisherName,
            publicationDate,
            licenseRights
        });

        const bookIds = [];
        for(const subject of subjects) {
            const SubjectId = await checkIfExistOrCreate({ model: Subject, key: 'description', value: subject });
            if (LanguageId && PublisherId && SubjectId) {
                const { id } = await Book.create({ title, LanguageId, PublisherId, SubjectId });
                bookIds.push(id)
            }
        }

        const AuthorId = await checkIfExistOrCreate({ model: Author, key: 'authorName', value: authorName });

        for (const BookId of bookIds) {
            if (AuthorId && BookId) {
                await AuthorBook.create({ AuthorId, BookId });
            }
        }
    }
}

module.exports = saveDataToDB;
