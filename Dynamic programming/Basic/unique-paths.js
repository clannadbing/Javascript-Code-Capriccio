// https://leetcode.cn/problems/unique-paths/
var uniquePaths = function(m, n) {
    // 1. dp[i][j]含义：到达坐标(i,j)由dp[i][j]种不同路径
    // 3. dp初始化：dp[i][0] = 1, dp[0][j] = 1
    let dp = new Array(m)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n)
    }
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = 1
    }
    for (let i = 0; i < dp[0].length; i++) {
        dp[0][i] = 1
    }
    console.log(dp)
    // 4. dp递推顺序：自上向下,自左向右
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // 2. dp递推关系式
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};