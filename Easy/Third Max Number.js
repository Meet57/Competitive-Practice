
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (n) {
    if(n.length <= 2){
        return Math.max(...n)
    }

    let se = new Set(n)
    if(se.size<3) return Math.max(...se);

    se.delete(Math.max(...se))
    se.delete(Math.max(...se))

    return Math.max(...se)
};


console.log(thirdMax([1,2]));
// console.log(thirdMax([3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6]));


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  function insertionSort(inputArr) {
//     let n = inputArr.length;
//         for (let i = 1; i < n; i++) {
//             // Choosing the first element in our unsorted subarray
//             let current = inputArr[i];
//             // The last element of our sorted subarray
//             let j = i-1; 
//             while ((j > -1) && (current < inputArr[j])) {
//                 inputArr[j+1] = inputArr[j];
//                 j--;
//             }
//             inputArr[j+1] = current;
//         }
//     return inputArr;
// }

// var thirdMax = function (nums) {
//     if (nums.length <= 2) {
//         return Math.max(...nums)
//     }

//     nums = insertionSort(nums).reverse()
//     console.log(nums)
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] == nums[i + 1]) {
//             nums.splice(i, 1)
//             i--
//         }
//     }
//     if (nums.length <= 2) {
//         return Math.max(...nums)
//     }

//     return nums[2]
// }

//  console.log(thirdMax([3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6]));
