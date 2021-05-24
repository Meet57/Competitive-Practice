/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    // millisecondaday = 1000*60*60*24 = 86400000
    return (
        (new Date(date) - new Date(date.slice(0,4))+86400000)/ 86400000
    )
};

console.log(dayOfYear('2019-01-09'));