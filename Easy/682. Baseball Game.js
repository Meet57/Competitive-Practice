/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    var stack = []
    for (const operation of ops) {
        if (operation == 'C') {
            stack.pop()
        }
        else if (operation == 'D') {
            stack.push((stack[stack.length - 1] * 2))
        }
        else if (operation == '+') {
            stack.push((stack[stack.length - 1] + stack[stack.length - 2]))
        }else{
            stack.push(parseInt(operation))
        }
    }
    return stack.reduce((a,b)=>a+b)
};

console.log(calPoints(["5", "2", "C", "D", "+"])) //30
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])) //27
console.log(calPoints(["1"])) //1

