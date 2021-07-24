const fs = require('fs');
const path = require('path');
const ReplaceAll = require("./ReplaceAll");

function Import(filePath) {
    const code = fs.readFileSync(filePath, 'utf-8');
    const compile = ReplaceAll(code, /#import\s+.*;/, e => {
        let [resPath] = e.match(/(?<='|")(.*)(?='|")/);
        if (!path.isAbsolute(resPath)) resPath = path.join(filePath.split("\\").slice(0, -1).join("\\"), resPath);
        resPath = path.normalize(resPath);
        return Import(resPath);
    });
    return compile;
}

module.exports = Import;