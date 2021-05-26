// This question can be done like :
//     ->Find the distance between the two stops if the bus moved in clockwise or counterclockwise directions.

// but if start>destination then just do reverse because path remanis the same
// and if start>destination then path would be (total-path)


/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
    if(start> destination) [start,destination] = [destination,start]
    let total = sum(distance)
    let path = sum(distance.slice(start, destination))

    return Math.min(path, total-path)
}

var sum = function (arr) {
    return arr.reduce((a, b) => a + b)
}

console.log(distanceBetweenBusStops(
    [7, 10, 1, 12, 11, 14, 5, 0],
    7,
    2
))