const findCountOfFilesHandleByThread = ({ numCPUs, filesPath }) => {
    const result = [];
    const countFilesPerCPU = Math.ceil(filesPath.length / numCPUs);

    for (let index = 0; index < numCPUs; index++) {
        const start = index * countFilesPerCPU;
        const end = start + countFilesPerCPU;
        result.push(filesPath.slice(start, end));
    }

    return result;
};

module.exports = findCountOfFilesHandleByThread;
