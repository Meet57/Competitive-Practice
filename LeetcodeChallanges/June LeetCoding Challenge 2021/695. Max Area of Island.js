/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    m = grid.length;
    n = grid[0].length;
    ans = 0;

    travserse = (i, j) => {
        if (i < 0 || j < 0 || i >= m || j >= n || !grid[i][j]) {
            return 0
        }
        grid[i][j] = 0
        return 1 + travserse(i-1,j) + travserse(i,j-1) + travserse(i+1,j) + travserse(i,j+1)
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) {
                ans = Math.max(ans, travserse(i, j));
            }
        }
    }

    return ans;
};

console.log(
    maxAreaOfIsland([
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ])
);
