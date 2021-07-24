const path = require('path');
const fs = require('fs');

const localPath = process.cwd();
const filePath = process.argv[2]?.toLocaleLowerCase();
const outFile = process.argv[3]?.toLocaleLowerCase();

const targetPath = path.join(localPath, filePath);
const outPath = path.join(localPath, outFile);