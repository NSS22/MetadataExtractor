const { Worker } = require('worker_threads');
const path = require('path');
const os = require('os');

const findCountOfFilesHandleByThread = require('./services/findCountOfFilesHandleByThread');
const getFilesPathFromDirectory = require('./services/getFilesPathFromDirectory');
const saveDataToDB = require('./services/saveDataToDB');
const filesHandler = path.resolve('./services/filesHandler.js');

(async function() {
    const numCPUs = os.cpus().length;
    const directoryPath = path.join(__dirname, 'epub');
    const filesPath = await getFilesPathFromDirectory(directoryPath);
    const filesPerThread = findCountOfFilesHandleByThread({ numCPUs, filesPath });

    const promiseOfHandledResult = [];
    for (const files of filesPerThread) {
        const promise = new Promise((resolve, reject) => {
            const worker = new Worker(filesHandler, { workerData: files })
            worker.on('message', resolve)
            worker.on('error', reject)
            worker.on('exit', code => {
                if (code !== 0) {
                    reject(new Error(`Worker stopped with exit code ${code}`));
                }
            });
        });
        promiseOfHandledResult.push(promise);
    }

    Promise.all(promiseOfHandledResult).then(results => {
        const handledResult = [];
        for (const result of results) {
            handledResult.push(...result);
        }
        saveDataToDB(handledResult);
    })
})();
