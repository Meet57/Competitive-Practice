/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */

/**
 * The logic for the question is the most visited nodes will
 * the nodes b/w the start node and the end node, as it is
 * seen that the person is just moving in the single direction.
 * so we just need to add the elements of first and end node 
 * and return it
 */

var mostVisited = function (n, rounds) {
    var start = rounds[0], end = rounds[rounds.length - 1];
    res = []
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            res.push(i)
        }
    } else {
        for (let i = 1; i <= end; i++) {
            res.push(i)
        }
        //Here [i] is the last node
        for (let i = start; i <= n; i++) {
            res.push(i)
        }
    }
    return res
};

console.log(mostVisited(4, [1, 3, 1, 2]))
console.log(mostVisited(2, [2, 1, 2, 1, 2, 1, 2, 1, 2]))
console.log(mostVisited(7, [1, 3, 5, 7]))