const findCountOfFilesHandleByThread = require('../services/findCountOfFilesHandleByThread');

describe('Service', () => {
    it('findCountOfFilesHandleByThread.js', () => {
        const numCPUs = 2;
        const filesPath = ['path_1', 'path_2', 'path_3', 'path_4'];
        const expectedResult = 2;

        const result = findCountOfFilesHandleByThread({ numCPUs, filesPath });
        expect(expectedResult).toEqual(result.length);
        expect(['path_1', 'path_2']).toEqual(result[0]);
    });
});