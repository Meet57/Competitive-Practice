/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    stack = []
    poppedpointer = 0
    for (let i = 0; i < pushed.length; i++) {
        stack.push(pushed[i])
        while (stack.length && stack[stack.length - 1] === popped[poppedpointer]) {
            stack.pop()
            poppedpointer++
        }
    }
    return stack.length === 0 ? true : false

};

console.log(validateStackSequences([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]))