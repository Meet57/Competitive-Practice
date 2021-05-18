/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var stack = []

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
                stack.push(')')
                break
            case '{':
                stack.push('}')
                break
            case '[':
                stack.push(']')
                break
            default:
                if (s[i] !== stack.pop()) {
                    return false
                }
        }
    }

    return stack.length === 0
};

console.log(isValid('()[]'));