// https://leetcode.cn/problems/largest-1-bordered-square/
var largest1BorderedSquare = function(grid) {
    // 行前缀和
    let S1 = new Array(grid.length).fill(0)
    for (let i = 0; i < S1.length; i++) {
        S1[i] = new Array(grid[0].length + 1).fill(0)
        for (let j = 1; j < S1[i].length; j++) {
            S1[i][j] = S1[i][j-1] + grid[i][j-1]
        }
    }
    // 列前缀和
    let S2 = new Array(grid.length + 1).fill(0)
    for (let i = 0; i < S2.length; i++) {
        S2[i] = new Array(grid[0].length).fill(0)
        if (i != 0) {
            for (let j = 0; j < S2[i].length; j++) {
                S2[i][j] = S2[i-1][j] + grid[i-1][j]
            }
        }
    }
    for (let k = Math.min(grid.length, grid[0].length); k >= 1; k--) {
        for (let i = 0; i < grid.length - k + 1; i++) {
            for (let j = 0; j < grid[0].length - k + 1; j++) {
                if ( (S1[i][j+k] - S1[i][j] == k) && (S1[i+k-1][j+k] - S1[i+k-1][j] == k) && (S2[i+k][j] - S2[i][j] == k) && (S2[i+k][j+k-1] - S2[i][j+k-1] == k)
                ) {
                    return k*k
                }
            }
        }
    }
    return 0
};