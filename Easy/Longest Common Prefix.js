/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    prefix = ''
    flag = true

    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if(flag == false) {break}
            if(strs[0][i] == strs[j][i]){
                continue
            }
            flag = false
        } 
        if(flag == false) {break}
        prefix += strs[0][i]  
    }

    return prefix
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))