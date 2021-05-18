/**
 * @param {string} 
 * @return {number}
 */
var romanToInt = function (s) {
    number = 0
    var data = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    if (s.search('CM') >= 0) {
        s = s.replace('CM', '')
        number += 900
    }
    if (s.search('CD') >= 0) {
        s = s.replace('CD', '')
        number += 400
    }
    if (s.search('XC') >= 0) {
        s = s.replace('XC', '')
        number += 90
    }
    if (s.search('XL') >= 0) {
        s = s.replace('XL', '')
        number += 40
    }
    if (s.search('IX') >= 0) {
        s = s.replace('IX', '')
        number += 9
    }
    if (s.search('IV') >= 0) {
        s = s.replace('IV', '')
        number += 4
    }
    for (let i = 0; i < s.length; i++) {
        number += data[s[i]]
    }

    return number
}

console.log(romanToInt('CMXCIX'))