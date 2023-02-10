// https://leetcode.cn/problems/fibonacci-number/
var fib = function(n) {
    // 1. dp含义：dp[i]表示第i个数字的值
    // 3. dp初始化：dp[0] = 1, dp[1] = 1
    let dp = []
    dp[0] = 0, dp[1] = 1
    // 4. dp递推顺序：自左向右
    for (let i = 2; i <= n; i ++) {
        // 2. 递推表达式
        dp[i] = dp[i-1] + dp[i-2]
    } 
    return dp[n]
};