const {
    Author,
    AuthorBook,
    Book,
    Language,
    Publisher,
    Subject,
} = require('./model');

Book.findOne({
    where: { title: 'Carmilla' },
    include: [
        {
            model: Author,
            attributes: ['authorName'],
            through: {
                model: AuthorBook,
            },
        },
        {
            model: Publisher,
            attributes: ['publisherName', 'publicationDate'],
        },
        {
            model: Subject,
            attributes: ['description'],
        },
        {
            model: Language,
            attributes: ['language'],
        },
    ],
}).then(({ title, Authors, Publisher, Language, Subject }) => {
    const authors = [];
    for(const Author of Authors) {
        authors.push(Author.dataValues.authorName);
    }
    console.log(`Result: 
    title: ${title},
    authors: ${authors},
    publisherName: ${Publisher.publisherName},
    publicationDate: ${Publisher.publicationDate},
    language: ${Language.language}
    subject: ${Subject.description}`);
});

