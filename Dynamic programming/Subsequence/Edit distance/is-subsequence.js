// https://leetcode.cn/problems/is-subsequence/
var isSubsequence = function(s, t) {
    // 1、dp[i][j]含义：表示s以i-1结尾, t以j-1结尾的公共的 、长度最长的子序列的长度为dp[i][j]
    // 2、dp[i][j]初始化：dp[0][j] = 0, dp[i][0] = 0
    let dp = new Array(s.length+1)
    for (let i = 0; i <= s.length; i++) {
        dp[i] = new Array(t.length+1).fill(0)
    }
    // 3、dp遍历顺序：由上到下, 由左到右
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            // 4、dp递推公式
            if (s[i-1] == t[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            }
            else {
                dp[i][j] = dp[i][j-1] // 删除t[j-1]的情况
            }
        }
    }
    if (dp[s.length][t.length] == s.length) {
        return true
    }
    return false
};