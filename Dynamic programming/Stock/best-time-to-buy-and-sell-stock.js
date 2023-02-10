// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
var maxProfit = function(prices) {
    // 1. dp含义：dp[i][0]表示第i天不操作最大利润是dp[i][0]状态, dp[i][1]:表示第i天买入股票最大利润是dp[i][1]状态, dp[i][2]:表示第i天卖出股票最大利润是dp[i][2]状态
    // 2. dp初始化：   dp[0][0] = 0, dp[0][1] = -price[0]; dp[0][2] = 0
    let dp = new Array(prices.length)
    for (let i = 0; i < prices.length; i++) {
        dp[i] = new Array(3).fill(0)
    }
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    dp[0][2] = 0
    // 3. dp递推顺序：由小到大
    for (let i = 1; i < dp.length; i++) {
        // 4. dp递推公式
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][2]-prices[i], dp[i-1][0]-prices[i])
        dp[i][2] = Math.max(dp[i-1][2], dp[i-1][1]+prices[i])
    }
    return dp[prices.length-1][2]
};