// https://leetcode.cn/problems/min-cost-climbing-stairs/
var minCostClimbingStairs = function(cost) {
    // 1. dp[i]含义：到达第i个台阶的最低花费
    // 3. dp初始化：dp[0] = 0, dp[1] = 0
    let dp = []
    dp[0] = 0, dp[1] = 0
    // 4. dp递推顺序：自左向右
    for (let i = 2; i <= cost.length; i++) {
        // 3. 递推表达式
        dp[i] = Math.min(dp[i-1]+cost[i-1], dp[i-2]+cost[i-2])
    } 
    return dp[cost.length]
};