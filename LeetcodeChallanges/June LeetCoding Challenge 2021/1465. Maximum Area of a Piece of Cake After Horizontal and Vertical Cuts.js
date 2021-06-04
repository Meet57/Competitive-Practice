/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
 var maxArea = function (h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.push(0)
    horizontalCuts.push(h)
    horizontalCuts.sort((a, b) => a - b)
    verticalCuts.push(0)
    verticalCuts.push(w)
    verticalCuts.sort((a, b) => a - b)

    hd = 0
    vd = 0

    for (let i = 0; i < horizontalCuts.length-1; i++) {
        x = Math.abs(horizontalCuts[i]-horizontalCuts[i+1])
        if(x>hd) hd = x
    }

    for (let i = 0; i < verticalCuts.length-1; i++) {
        x = Math.abs(verticalCuts[i]-verticalCuts[i+1])
        if(x>vd) vd = x
    }

    return (hd*vd)% (1e9 + 7)
};

h = 5, w = 4, horizontalCuts = [1, 2, 4], verticalCuts = [1, 3]
console.log(maxArea(h, w, horizontalCuts, verticalCuts))