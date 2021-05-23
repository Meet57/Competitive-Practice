/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    var max = 0
    for (const ele of accounts) {
        let sum = 0
        for (const e of ele) {
            sum += e
        }
        if(max < sum) max = sum
    }
    return max
};

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]))