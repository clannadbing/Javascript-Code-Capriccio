// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/
var maxProfit = function(prices) {
    // 1. dp数组含义: dp[i][0]表示第i天不操作状态, dp[i][1]表示第i天买入股票, dp[i][2]表示第i天卖出股票(当天卖出股票), dp[i][3]表示第i天是冷冻期, dp[i][4]表示第i天卖出股票(不是当天卖出股票)
    // 2. dp初始化: dp[0][0] = 0, dp[0][1] = -prices[0], dp[0][2] = 0, dp[0][3] = 0, dp[0][4] = 0
    let dp = new Array(prices.length)
    for (let i = 0; i < prices.length; i++) {
        dp[i] = new Array(5).fill(0)
    }
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    dp[0][2] = 0
    dp[0][3] = 0
    dp[0][4] = 0
    // 3. dp递推顺序:由小到大
    for (let i = 1; i < prices.length; i++) {
        // 4. dp
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][4] - prices[i], dp[i-1][3] - prices[i], dp[i-1][0]-prices[i])
        dp[i][2] = dp[i-1][1] + prices[i]
        dp[i][3] = dp[i-1][2]
        dp[i][4] = Math.max(dp[i-1][4], dp[i-1][3])
    }
    return Math.max(dp[prices.length-1][2], dp[prices.length-1][3], dp[prices.length-1][4])
};