/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    const map = {}
    length = 0
    for (const l of chars) {
        if (map[l]) map[l] += 1
        else map[l] = 1
    }
    for (const word of words) {
        const mapCopy = {...map}
        let flag = true
        for (const l of word) {
            if (!mapCopy[l]) {
                flag = false
                break
            }
            mapCopy[l] -= 1
        }

        if (flag) {
            length += word.length
        }
    }
    return length
};

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"));