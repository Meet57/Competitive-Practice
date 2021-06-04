// This is copied answer

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    if (s3.length != s1.length + s2.length) return false

    dp = []
    for (let i = 0; i <= s1.length; i++) {
        dp[i] = []
        for (let j = 0; j <= s2.length; j++) {
            if (i == 0 && j == 0) {
                dp[i][j] = true
            } else if (i == 0) {
                dp[i][j] = dp[i][j - 1] && s2[j - 1] == s3[i + j - 1]
            } else if (j == 0) {
                dp[i][j] = dp[i - 1][j] && s2[i - 1] && s3[i + j - 1]
            } else {
                dp[i][j] = (dp[i - 1][j] && s1[i - 1] == s3[i + j - 1]) || (dp[i][j - 1] && s2[j - 1] == s3[i + j - 1])
            }
        }
    }

    return dp[s1.length][s2.length]
};

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"))
console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc"))