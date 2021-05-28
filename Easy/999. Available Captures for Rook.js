var findRook = function (board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == 'R') {
                return { i, j }
            }
        }
    }
}

var moveUp = function (board, row, column) {
    let counter = 0
    while (true) {
        if (board[row][column] == 'B') break
        else if (board[row][column] == 'p') {
            counter++
            break
        }
        else if (row == 0) {
            break
        }
        row--
    }
    return counter
}

var moveDown = function (board, row, column) {
    let counter = 0
    while (true) {
        if (board[row][column] == 'B') break
        else if (board[row][column] == 'p') {
            counter++
            break
        }
        else if (row == board.length - 1) break
        row++
    }
    return counter
}

var moveLeft = function (board, row, column) {
    let counter = 0
    while (true) {
        if (board[row][column] == 'B') break
        else if (board[row][column] == 'p') {
            counter++
            break
        }
        else if (column == 0) break
        column--
    }
    return counter
}

var moveRight = function (board, row, column) {
    let counter = 0
    while (true) {
        if (board[row][column] == 'B') break
        else if (board[row][column] == 'p') {
            counter++
            break
        }
        else if (column == board[row].length - 1) break
        column++
    }
    return counter
}

var numRookCaptures = function (board) {
    rook = findRook(board)
    counter = 0
    counter += moveUp(board, rook.i, rook.j)
    counter += moveDown(board, rook.i, rook.j)
    counter += moveRight(board, rook.i, rook.j)
    counter += moveLeft(board, rook.i, rook.j)

    return counter
};

console.log(numRookCaptures(
    [[".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "p", ".", ".", ".", "."], [".", ".", ".", "R", ".", ".", ".", "p"], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "p", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."]]
))//3

console.log(numRookCaptures(
    [[".", ".", ".", ".", ".", ".", ".", "."], [".", "p", "p", "p", "p", "p", ".", "."], [".", "p", "p", "B", "p", "p", ".", "."], [".", "p", "B", "R", "B", "p", ".", "."], [".", "p", "p", "B", "p", "p", ".", "."], [".", "p", "p", "p", "p", "p", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."]]
))//0

console.log(numRookCaptures(
    [[".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "p", ".", ".", ".", "."], [".", ".", ".", "p", ".", ".", ".", "."], ["p", "p", ".", "R", ".", "p", "B", "."], [".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", "B", ".", ".", ".", "."], [".", ".", ".", "p", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "."]]
))//3