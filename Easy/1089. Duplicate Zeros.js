/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function (arr) {
    const len = arr.length
    for (var i = 0; i < len; i++) {
        if (arr[i] == 0) {
            i++
            arr.splice(i, 0, 0)
            arr.pop()
        }
    }
    return arr
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))