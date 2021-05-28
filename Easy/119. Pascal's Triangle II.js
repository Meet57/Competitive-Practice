var getRow = function (row) {
    numRows = row+1
    var pascal = []
    for (var i = 0; i < numRows; i++) {
        pascal[i] = []
        pascal[i][0] = 1
        //add upper and left of the upper... see the diagram above
        for (var j = 1; j < i; j++) {
            pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j]
        }
        pascal[i][i] = 1
    }
    return pascal.pop()
}

console.log(getRow(3))