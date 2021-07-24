const path = require('path');
const fs = require('fs');
const Compile = require('./ejs/Compile');


const localPath = process.cwd();
const filePath = process.argv[2]?.toLocaleLowerCase();
const outFile = process.argv[3]?.toLocaleLowerCase();

const targetPath = path.join(localPath, filePath);


Compile(targetPath);


const outPath = path.join(localPath, outFile);