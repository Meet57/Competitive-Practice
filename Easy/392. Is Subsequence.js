/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if(!s.length) return true
    sp = 0
    for (let i = 0; i < t.length; i++) {
        if(t[i] == s[sp]){
            sp++
        }
        if(sp == s.length) return true
    }
    return false
};

s = "abc", t = "ahbgdc"
console.log(isSubsequence(s,t))
s = "axc", t = "ahbgdc"
console.log(isSubsequence(s,t))