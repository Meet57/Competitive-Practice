/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    if(num<0) num += Math.pow(2,32)
    stack = []
    hexArray = ['a','b','c','d','e','f']
    hex(num,stack)
    for (let i = 0; i < stack.length; i++) {
        if(stack[i]>=10){
            stack.splice(i,1,hexArray[(stack[i]-10)])
        }
    }
    // console.log(stack)
    return stack.join('')
}

var hex = function (num,stack) {
    if(num >= 16){
        let q = ~~(num/16)
        let r = num%16
        stack.unshift(r)
        hex(q,stack)
    }else{
        stack.unshift(num)
    }
}

console.log(toHex(-2));