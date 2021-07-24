const fs = require('fs');
const path = require('path');
const Comments = require('./Comments');

const files = [];

function Import(filePath) {
    if (files.indexOf(filePath) != -1) throw new Error(filePath + " included twice");
    files.push(filePath);
    let code = fs.readFileSync(filePath, 'utf-8');
    code = Comments(code);
    const compile = code.replace(/#import\s+.*;/g, e => {
        let [resPath] = e.match(/(?<='|")(.*)(?='|")/);
        if (!path.isAbsolute(resPath)) resPath = path.join(filePath.split("\\").slice(0, -1).join("\\"), resPath);
        resPath = path.normalize(resPath);
        return Import(resPath);
    })
    // const compile = ReplaceAll(code, /#import\s+.*;/, e => {
    //     let [resPath] = e.match(/(?<='|")(.*)(?='|")/);
    //     if (!path.isAbsolute(resPath)) resPath = path.join(filePath.split("\\").slice(0, -1).join("\\"), resPath);
    //     resPath = path.normalize(resPath);
    //     return Import(resPath);
    // });
    return compile;
}

module.exports = Import;