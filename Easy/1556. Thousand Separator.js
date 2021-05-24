/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
    n = n.toString();
    if (n.length < 3) return n

    result = ""
    j = 0
    for (let index = n.length - 1; index >= 0; index--) {
        result += n[index]
        j++
        if (j % 3 === 0 && index !== 0) result += "."
    }

    return result.split("").reverse().join("")
};

console.log(thousandSeparator(123456789));