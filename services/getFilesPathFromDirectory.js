const fsPromises = require('fs').promises;
const path = require('path');
const junk = require('junk');
const result = [];

const getFilesPathFromDirectory = async (directoryPath) => {
    let filePath = null;
    const dirs = await fsPromises.readdir(directoryPath, { withFileTypes: true });

    for (const dirent of dirs) {
        filePath = path.resolve(directoryPath, dirent.name);
        if (dirent.isDirectory()) {
             await getFilesPathFromDirectory(filePath);
        } else {
            if (junk.not(dirent.name)) {
                result.push(filePath);
            }
        }
    }

    return result;
}

module.exports = getFilesPathFromDirectory;
