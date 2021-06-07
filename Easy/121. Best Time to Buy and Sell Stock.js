/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    min = Infinity;
    max = 0

    for (let i = 0; i < prices.length; i++) {
        //check until you get min
        if (prices[i] < min) {
            min = prices[i];
        }
        //check when price - min is the max...once min is get it will always be zero otherwise
        //max will be zero as price -min maybe 0 or less
        else if (prices[i] - min > max) {
            max = prices[i] -min;
        }
    }

    return max
};

prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices));
prices = [7, 6, 4, 3, 1]
console.log(maxProfit(prices));