/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    words.sort()

    let set = new Set()
    let res = ''

    for (const word of words) {
        if(word.length === 1 || set.has(word.slice(0,-1))){
            set.add(word)
            if(word.length > res.length){
                res = word
            }
        }
    }

    return res
}

console.log(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]));