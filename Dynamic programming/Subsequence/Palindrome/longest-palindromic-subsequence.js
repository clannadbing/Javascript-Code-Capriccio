// https://leetcode.cn/problems/longest-palindromic-subsequence/
var longestPalindromeSubseq = function(s) {
    // 1、dp[i][j]含义：表示下标区间[i, j](j >= i)这个字符串最长的回文子序列长度是dp[i][j]
    // 2、dp[i][j]初始化: dp[i][i] = 1
    let dp = new Array(s.length)
    for (let i = 0; i < s.length; i++) {
        dp[i] = new Array(s.length).fill(false)
        dp[i][i] = 1
    }
    // 3、dp递推顺序：由下到上，由左至右
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) {
            // 4、dp递推公式
            if (s[i] == s[j]) {
                dp[i][j] = dp[i+1][j-1] + 2
            }
            else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]) // dp[i][j] = dp[i+1][j-1] --> 求最长的回文子串的长度
            }
        }
    }
    return dp[0][s.length-1]
};