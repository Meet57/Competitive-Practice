/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    result = ""
    pc = 0

    for (const p of s) {
        if (p == "(") {
            if(pc){
                result += p
            }
            pc++;
        }else{
            pc--
            if(pc){
                result += p
            }
        }
    }

    return result
};

console.log(removeOuterParentheses('(()())(())'))