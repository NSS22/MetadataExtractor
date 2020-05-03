const xml2js = require('xml2js');
const parser = new xml2js.Parser();

const fileParser = (data) => {
    if (data) {
        return new Promise((resolve, reject) =>
            parser.parseString(data, (err, value) =>
                err ? reject(err) : resolve(value))
        );
    }
};

module.exports = fileParser;
