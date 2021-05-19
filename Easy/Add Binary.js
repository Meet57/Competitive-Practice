/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    a = a.split("").reverse();
    b = b.split("").reverse();
    result = []

    loop = Math.max(a.length, b.length)

    carry = 0
    for (let i = 0; i < loop; i++) {
        if(!a[i]){
            a[i] = 0
        }
        if(!b[i]){
            b[i] = 0
        }
        if((a[i] == 1 && b[i] == 0 && carry==0) || (a[i] == 0 && b[i] == 1 && carry==0)){
            result.push(1)
        }
        else if(a[i] == 1 && b[i] == 1 && carry==0){
            result.push(0)
            carry = 1
        }
        else if(a[i] == 1 && b[i] == 1 && carry==1){
            result.push(1)
            carry = 1
        }
        else if((a[i] == 1 && b[i] == 0 && carry==1) || (a[i] == 0 && b[i] == 1 && carry==1)){
            result.push(0)
            carry = 1
        }
        else if((a[i] == 0 && b[i] == 0 && carry==1) || (a[i] == 0 && b[i] == 0 && carry==1)){
            result.push(1)
            carry = 0
        }
        else if((a[i] == 0 && b[i] == 0 && carry==0) || (a[i] == 0 && b[i] == 0 && carry==0)){
            result.push(0)
        }
    }
    if(carry!=0){
        result.push(1)
    }
    return result.reverse().join("")
};

console.log(addBinary('11', '1'));