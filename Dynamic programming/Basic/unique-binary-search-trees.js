// https://leetcode.cn/problems/unique-binary-search-trees/
var numTrees = function(n) {
    // 1. dp[i]含义：由i个节点组成的二叉搜索树有dp[i]种
    // 2. dp初始化：dp[0] = 1
    let dp = new Array(n+1).fill(0)
    dp[0] = 1
    // 4. dp递推顺序:由小到大
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            // 3. dp递推表达式
            dp[i] = dp[j-1]*dp[i-j] + dp[i]
        }
    }
    return dp[n]
};