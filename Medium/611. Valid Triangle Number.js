/**
 * @param {number[]} nums
 * @return {number}
 */

// three sides of triangle x,y,z
/**
 * x+y > z
 * y+z > x
 * z+x > y 
 */


var triangleNumber = function (nums) {
    count = 0
    for (let x = 0; x < nums.length-2; x++) {
        for (let y = x+1; y < nums.length-1; y++) {
            for (let z = y+1; z < nums.length; z++) {
                if(
                    nums[x]+nums[y] > nums[z] &&
                    nums[y]+nums[z] > nums[x] &&
                    nums[z]+nums[x] > nums[y]
                ){
                    count ++
                }
            }
        }
    }
    return count
};

console.log(triangleNumber([4, 2, 3, 4]))