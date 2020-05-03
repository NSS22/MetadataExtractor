const { parentPort, workerData } = require('worker_threads');
const fsPromises = require('fs').promises;
const fileParser = require('./fileParser');
const dataParser = require('./dataParser');

const filesHandler = async (filesPath) => {
    const result = []
    for (const filePath of filesPath) {
        try {
            const data = await fsPromises.readFile(filePath, 'utf8');
            const parsedData = await fileParser(data);
            result.push(dataParser(parsedData));
        } catch(error) {
            console.log(error);
        }
    }
    parentPort.postMessage(result);
}

filesHandler(workerData);
