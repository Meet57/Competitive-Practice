/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    mincost = []
    mincost.push(0)
    mincost.push(0)
    cost.push(0)
    for (let i = 2; i < cost.length; i++) {
        onestep = cost[i-2]+mincost[i-2]
        twostep = cost[i-1]+mincost[i-1]
        mincost.push(Math.min(onestep,twostep))
    }
    return mincost
};

cost = [10, 15, 20]
//     [0,0,10,15]
console.log(minCostClimbingStairs(cost));
cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
//     [0,0,1,2,2,3,3,4,4,5,6]
console.log(minCostClimbingStairs(cost));