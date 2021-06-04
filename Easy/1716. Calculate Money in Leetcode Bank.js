/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    if (n > 7) {
        oldWeek = Math.floor(n / 7)
        total = [28]
        for (let i = 1; i < oldWeek; i++) {
            total.push(total[i-1]+7)
        }

        if(n%7){
            total.push(++oldWeek)
            for (let i = 1; i < n%7; i++) {
                total.push(total[total.length-1]+1)
            }
        }
    }else{
        total = [1]
        for (let i = 1; i < n; i++) {
            total.push(total[i-1]+1)
        }
    }

    return total.reduce((a,b)=>a+b)
};

// same logic without array

// var totalMoney = function(n) {
//     const mod = n%7,num = ~~(n/7);
//     let res = 28*num;
//     for(let i=1;i<num;i++) res += i*7
//     if(mod){
//         for(let i=1;i<=mod;i++) res += (i+num);        
//     }
//     return res;
// };

console.log(totalMoney(20))
console.log(totalMoney(4))