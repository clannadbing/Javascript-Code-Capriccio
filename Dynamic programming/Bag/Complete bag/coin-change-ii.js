// https://leetcode.cn/problems/coin-change-ii/
var change = function(amount, coins) {
    // 1. dp[j]含义：装满背包j的方案数量为dp[j]
    // 2. dp[j]初始化：dp[0] = 1
    let dp = new Array(amount+1).fill(0)
    dp[0] = 1
    // 3. dp递推顺序：先物品，后背包(正序) --> 组合问题
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            // 4. dp递推公式: dp[j] = dp[j] + dp[j-coins[i]]
            dp[j] = dp[j] + dp[j-coins[i]] 
        }
    }
    return dp[amount]
};