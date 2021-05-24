/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    if(digits.length == 0){
        digits = [1]
    }
    else if(digits[digits.length - 1] == 9){
        digits = plusOne(digits.slice(0,digits.length-1))
        digits.push(0)
    }
    else{
        digits[digits.length - 1] += 1
    }
    return digits
};

console.log(plusOne([1,2,3,9]))