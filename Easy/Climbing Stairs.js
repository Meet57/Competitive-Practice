/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function (n) {
    if(n==0) return 0
    if(n==1) return 1
    if(n==2) return 2

    var one = 2
    var two = 1
    var all = 0

    for (let i = 2; i < n; i++) {
        all = one + two
        two = one 
        one = all
    }

    return all
};

console.log(climbStairs(4))