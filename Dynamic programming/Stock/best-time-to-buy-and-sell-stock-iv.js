// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/
var maxProfit = function(k, prices) {
    // dp含义：dp[i][0]表示第i天不操作, dp[i][1]表示第i天第一次买入的最大利润, dp[i][2]表示第i天第一次卖出股票的最大利润, dp[i][3]表示第i天第二次买入股票的最大利润, dp[i][4]表示第i天第二次卖出股票的最大利润
    // dp初始化：dp[0][0] = 0, dp[0][1] = -prices[0], dp[0][2] = 0, dp[0][3] = -prices[0], dp[0][4] = 0
    let dp = new Array(prices.length)
    for (let i = 0; i < prices.length; i++) {
        dp[i] = new Array(2*k+1).fill(0)
    }
    dp[0][0] = 0
    for (let j = 1; j < 2*k+1; j=j+2) {
        dp[0][j] = -prices[0]
        dp[0][j+1] = 0
    }
    // dp递推顺序：由小到大
    for (let i = 1 ; i < prices.length; i++) {
        for (let j = 1; j < 2*k+1; j=j+2) {
            dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-1]-prices[i])
            dp[i][j+1] = Math.max(dp[i-1][j+1], dp[i-1][j] + prices[i]) 
        }
    }
    return dp[prices.length-1][2*k]
};