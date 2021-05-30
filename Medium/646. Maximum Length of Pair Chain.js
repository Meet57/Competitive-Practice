/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (p) {
    p.sort((a, b) => a[0] - b[0])

    let n = p.length
    let dp = new Array(n).fill(1)

    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            if (p[j][1] < p[i][0]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }

    return Math.max(...dp)
};

var findLongestChain = function (p) {
    p.sort((a, b) => a[0] - b[0]);
    let n = p.length;
    let dp = new Array(n).fill(1);


    let res = 1;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            if (p[j][1] < p[i][0]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                // res = Math.max(res,dp[i])
            }
        }
    }


    return Math.max(...dp);
};

console.log(findLongestChain([[1, 2], [2, 3], [3, 4]]))
console.log(findLongestChain([[1, 2], [7, 8], [4, 5]]))