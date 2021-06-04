var countOdds = function(low, high) {
	const c = Math.round((high-low) / 2);//

    return low % 2 === 1 && high % 2 === 1 ? c+1 : c;
}

// /**
//  * @param {number} low
//  * @param {number} high
//  * @return {number}
//  */
//  var countOdds = function(low, high) {
//     res = 0
//     for(let i=low;i<=high;i++){
//         if(i%2) res++
//     }
//     return res
// };


console.log(countOdds(3,7))
console.log(countOdds(3,17))
console.log(countOdds(13,117))