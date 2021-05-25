/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function (groups, nums) {
    let subArray = groups.shift()
    let returnValue = false
    for (let i=0; i<nums.length; i++) {
        if(subArray[0] == nums[i]) {
            // console.log(subArray);
            if(checkExists(subArray, nums.slice(i, i+subArray.length))){
                i = i + subArray.length - 1
                returnValue = true
                if(groups[0]){
                    subArray = groups.shift()
                    returnValue = false
                }
            }
        }
    }
    return returnValue
}

var checkExists = function (list1, list2) {
    if (list2.length != list1.length) return false
    for (let i = 0; i < list2.length; i++) {
        if (list1[i] == list2[i]) {
            continue
        }
        return false
    }
    return true
}

console.log(canChoose(
    [[1,-1,-1],[3,-2,0]],
    [1,-1,0,1,-1,-1,3,-2,0]
    // [[-9439956, 8480313], [-6326172, 1556913, -4643857], [-1433754, 5200117, -1436369, -4053777, -4380629, -985880, -9511449, 7695949, 8489469, -3933896, -2295734, 9611252, -3805511, -1626182, -7207126, -564606, -7635974, -259675, -8910853], [-7667451, -6926367]],
    // [-9439956, 8480313, -6326172, 1556913, -4643857, -4643857, -1433754, 5200117, -1436369, -4053777, -4380629, -985880, -9511449, 7695949, 8489469, -3933896, -2295734, 9611252, -3805511, -1626182, -7207126, -564606, -7635974, -259675, -8910853, 8489469, -564606, -8910853, 9611252, -1626182]
))