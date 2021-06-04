/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    if (n == 0) return 0
    else if (n == 1) return 1
    else if (n == 2) return 1

    a = 0
    b = 1
    c = 1
    temp = 0

    for (let i = 3; i <= n; i++) {
        temp = a + b + c
        a = b
        b = c
        c = temp
    }

    return temp
};

console.log(tribonacci(4))
console.log(tribonacci(25))