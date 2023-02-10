// https://leetcode.cn/problems/unique-paths-ii/
var uniquePathsWithObstacles = function(obstacleGrid) {
    // 1. dp[i][j]含义：到达坐标(i,j)由dp[i][j]种不同路径
    // 3. dp初始化：dp[i][0] = 1, dp[0][j] = 1
    let dp = new Array(obstacleGrid.length).fill(0)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(obstacleGrid[0].length).fill(0)
    }
    for (let i = 0; i < dp.length; i++) {
        if (obstacleGrid[i][0] != 1) {
            dp[i][0] = 1
        }
        else {
            break
        }
    }
    for (let i = 0; i < dp[0].length; i++) {
        if (obstacleGrid[0][i] != 1) {
            dp[0][i] = 1
        }
        else {
            break
        }
    }
    console.log(dp)
    // 4. dp递推顺序：自上向下,自左向右
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            // 2. dp递推关系式
            if (obstacleGrid[i][j] != 1) {
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
            }
            else {
                dp[i][j] = 0
            }
        }
    }
    return dp[dp.length-1][dp[0].length-1]
};