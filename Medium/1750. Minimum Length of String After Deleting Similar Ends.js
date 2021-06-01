/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
    x = 0, y = s.length - 1

    while (x < y) {
        if (s[x] === s[y]) {
            while (x < y && s[x] === s[x + 1]) {
                x++
            }
            while (x < y && s[y] === s[y - 1]){
                y--
            }
            x++
            y--
        }
        else{
            return s.slice(x,y+1).length
        }
    }

    return s.slice(x, y + 1).length
};

console.log(minimumLength("aabccabba"));