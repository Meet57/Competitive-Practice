/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    var diff = new Map()
    for (const l of s) {
        diff.set(l,(diff.get(l) ?? 0) + 1)
    }
    for (const l of t) {
        if(!diff.has(l)){
            return l
        }
        count = diff.get(l)
        if(count == 1){
            diff.delete(l)
        }else{
            diff.set(l,count-1)
        }
    }
};

console.log(findTheDifference("abcd", "abcde"));