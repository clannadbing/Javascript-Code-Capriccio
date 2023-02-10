// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/
var maxProfit = function(prices) {
    // 1. dp含义：dp[i][0]表示第i天不操作, dp[i][1]表示第i天第一次买入股票的最大利润, dp[i][2]表示第i天第一次卖出股票的最大利润, dp[i][3]表示第i天第二次买入股票的最大利润, dp[i][4]表示第i天第二次卖出股票的最大利润
    // 2. dp初始化：dp[0][0] = 0, dp[0][1] = -prices[0], dp[0][2] = 0, dp[0][3] = -prices[0], dp[0][4] = 0
    let dp = new Array(prices.length) 
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(5).fill(0)
    }
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    dp[0][2] = 0
    dp[0][3] = -prices[0]
    dp[0][4] = 0
    // 3. dp递推顺序：由小到大
    for (let i = 1; i < prices.length; i++) {
        // 4. dp递推关系
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0]-prices[i])
        dp[i][2] = Math.max(dp[i-1][2], dp[i-1][1] + prices[i])
        dp[i][3] = Math.max(dp[i-1][3], dp[i-1][2] - prices[i])
        dp[i][4] = Math.max(dp[i-1][4], dp[i-1][3] + prices[i])
    }
    return dp[prices.length-1][4]
};