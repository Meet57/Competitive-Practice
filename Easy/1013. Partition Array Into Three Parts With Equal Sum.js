/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
    var sum = arr.reduce((total, x) => total + x, 0)
    if (sum % 3) return false

    var s = 0,count = 0
    sum = sum/3

    for (const a of arr) {
        s += a
        if(s == sum){
            count ++
            s = 0
        }
    }

    /**
     * return is >= 3 just bcoz the input array 
     * can be [0,0,0,0] which can be divided into three parts
     * but according to count the value will be count = 4
     * so return is count >= 3
     */

    return count >= 3
};

console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]))
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]))
console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]))
console.log(canThreePartsEqualSum([18,12,-18,18,-19,-1,10,10]))
console.log(canThreePartsEqualSum([0,0,0,0]))
