// https://leetcode.cn/problems/integer-break/
var integerBreak = function(n) {
    // 1. dp[i]含义：i拆分成2个或者2个以上正整数的和，这些整数乘积的最大值
    // 3. dp初始化：dp[0] = 0, dp[1] = 0
    let dp = new Array(n+1).fill(0)
    dp[0] = 0, dp[1] = 0
    // 4. dp递推顺序:由小到大
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
        // 3. dp递推表达式
            dp[i] = Math.max(j*(i-j), j*dp[i-j], dp[i])
        }
        console.log(dp[i])
    }
    return dp[n]
};