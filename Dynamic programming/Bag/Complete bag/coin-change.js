// https://leetcode.cn/problems/coin-change/
var coinChange = function(coins, amount) {
    // 1. dp[j]含义：完全装满背包j的最小物品数量为dp[j]
    // 2. dp[j]初始化：dp[0] = 0
    let dp = new Array(amount+1).fill(0)
    dp[0] = 0
    for (let i = 1; i < dp.length; i++) {
        dp[i] = Infinity
    }
    // 3. dp递推顺序: 先物品, 后背包(正序)-->组合问题
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            // 4. dp递推表达式：dp[j] = Math.min(dp[j], dp[j-coins[i]]+1)
            dp[j] = Math.min(dp[j], dp[j-coins[i]]+1)
        }
    }
    if (dp[amount] == Infinity) {
        return -1
    }
    return dp[amount]
};