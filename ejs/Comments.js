function Comments(code) {
    code = code.replace(/\/\/.*$/gm, e => {
        return "";
    });
    code = RemoveMultline(code);
    return code;
}

function RemoveMultline(code) {
    let scope = code;
    let open = scope.indexOf("/*");
    while(open != -1) {
        const close = scope.indexOf("*/");
        scope = scope.slice(0, open).concat(scope.slice(close + 2, scope.length));
        open = scope.indexOf('/*');
    }
    return scope;
}

module.exports = Comments;