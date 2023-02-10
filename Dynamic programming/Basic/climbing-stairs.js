// https://leetcode.cn/problems/climbing-stairs/
var climbStairs = function(n) {
    // 1. dp含义：dp[i]表示到达第i阶台阶有dp[i]种方法
    // 3. dp初始化：dp[1] = 1, dp[2] = 2
    let dp = []
    dp[1] = 1, dp[2] = 2
    // 4. dp递推顺序：自左向右
    for (let i = 3; i <= n; i++) {
        // 3. dp递推表达式
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
}; 