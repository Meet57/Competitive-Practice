/**
 * @param {string} path
 * @return {string}
 */

var simplifyPath = function (path) {
    arr = []
    direc = path.split("/")
    for (let i = 0; i < direc.length; i++) {
        if (i == 0 && direc[i] == '.') continue
        else if (direc[i] == ".") continue
        else if (direc[i] == "..") {
            arr.pop()
        }
        else if (direc[i] != '' && direc[i] != "/") {
            arr.push(direc[i])
        }
    }
    return "/" + arr.join('/')
}

console.log(simplifyPath("/a/./b/../c/"));