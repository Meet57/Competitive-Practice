/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
    const millisecondaday = 1000 * 60 * 60 * 24
    return Math.abs((new Date(date1).getTime() - new Date(date2).getTime()) / millisecondaday)
};

console.log(daysBetweenDates("2019-06-29","2017-02-30"));