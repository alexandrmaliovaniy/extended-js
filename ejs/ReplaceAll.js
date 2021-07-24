const ReplaceAll = function(str, exp, cb) {
    while(exp.test(str)) {
        const [match] = str.match(exp);
        str = str.replace(match, cb(match));
    }
    return str;
}

module.exports = ReplaceAll;