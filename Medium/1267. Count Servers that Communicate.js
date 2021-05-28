/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
    var returnValue = 0
    for (let i = 0; i <grid.length; i++) {
        for (let j = 0; j <grid[i].length; j++) {
            if(grid[i][j] && searchConnectedServer(grid,i,j)){
                returnValue++
            }
        }
    }
    return returnValue
};

var searchConnectedServer = function (grid,row,column){
    for (let i = 0; i < grid[row].length; i++){
        if(grid[row][i] && i!=column){
            return true
        }
    }
    for (let i = 0; i < grid.length; i++) {
        if(grid[i][column] && i!=row){
            return true
        }
    }
    return false
}

console.log(countServers([[1,0],[0,1]]))  
console.log(countServers([[1,0],[1,1]]))  
console.log(countServers([[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]))  
console.log(countServers([[1,0,0,1,0],[0,0,0,0,0],[0,0,0,1,0]]))  