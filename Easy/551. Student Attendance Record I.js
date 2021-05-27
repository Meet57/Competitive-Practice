/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * USing regex
 */

// var checkRecord = function (s) {
//     return !/(A.*A|LLL)/.test(s)
// };

var checkRecord = function (s) {
    returnValue = true
    absent = 0
    late = 0
    for (const day of s) {
        switch (day) {
            case 'P':
                late = 0
                break;
            case 'A':
                absent++
                late = 0
                break;
            case 'L':
                late++
                break;
            default:
                break;
        }

        if (late == 3 || absent == 2) {
            return false
        }
    }
    return true
}

console.log((checkRecord('PPALLP')));
console.log((checkRecord('PPALLL')));