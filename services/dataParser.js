const moment = require('moment');

const parsedData = (dataset) => {
    const data = dataset['rdf:RDF'];
    const pgTermsEbook = data['pgterms:ebook'];
    const pgTermEbook = pgTermsEbook[0];
    let subjects = pgTermEbook['dcterms:subject'];
    const creator = pgTermEbook['dcterms:creator'];
    const lang = pgTermEbook['dcterms:language'];
    const issued = pgTermEbook['dcterms:issued'];

    const title = pgTermEbook['dcterms:title'] ? pgTermEbook['dcterms:title'][0] : '';
    const language = lang[0]['rdf:Description'] ? lang[0]['rdf:Description'][0]['rdf:value'][0]._ : '';
    const licenseRights = pgTermEbook['dcterms:rights'] ? pgTermEbook['dcterms:rights'][0] : 0;
    const publicationDate = issued[0] ? issued[0]._ : new Date();
    const publisherName = pgTermEbook['dcterms:publisher'][0];



    let authorName = null;
    if (!creator) {
        authorName = 'undefined';
    } else if (!creator[0]['pgterms:agent']) {
        authorName = '';
    } else if (!creator[0]['pgterms:agent'][0]['pgterms:name']) {
        authorName = '';
    } else if (!creator[0]['pgterms:agent'][0]['pgterms:name'][0]) {
        authorName = '';
    } else {
        authorName = creator[0]['pgterms:agent'][0]['pgterms:name'][0];
    }


    const modifiedSubject = [];
    if (subjects) {
        for (const subject of subjects) {
            modifiedSubject.push(subject['rdf:Description'][0]['rdf:value'][0]);
        }
    }
    return {
        title,
        authorName,
        publisherName,
        publicationDate: moment(publicationDate, 'YYYY-MM-DD').toDate(),
        language,
        subjects: modifiedSubject,
        licenseRights
    };
}

module.exports = parsedData