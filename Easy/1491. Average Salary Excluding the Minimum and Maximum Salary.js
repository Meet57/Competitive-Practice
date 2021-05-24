/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    if (salary.length < 3) return 0
    let min = salary[0], max = salary[0], sum = 0, len = 0

    for (let ele of salary) {
        if (ele > max) max = ele
        if (ele < min) min = ele
        sum += ele
        len += 1
    }
    len -= 2
    return (sum - max - min) / len
};

console.log(average([25000, 48000, 57000, 86000, 33000, 10000, 42000, 3000, 54000, 29000, 79000, 40000]))