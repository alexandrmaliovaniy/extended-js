const Import = require('./Import');

function Compile(filePath) {
    const code = Import(filePath);
    console.log(code);
}


module.exports = Compile;