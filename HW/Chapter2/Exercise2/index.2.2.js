const fs = require('fs');
const path = require('path');
const util = require('util');

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

async function searchDirectory(directory) {
    try {
        const files = await readdir(directory);

        for (const file of files) {
            const filePath = path.join(directory, file);
            const fileStat = await stat(filePath);

            if (fileStat.isDirectory()) {
                await searchDirectory(filePath);
            } else if (path.extname(file) === '.js') {
                console.log(filePath);
            }
        }
    } catch (error) {
        console.error(error);
    }
}

searchDirectory('./test');
