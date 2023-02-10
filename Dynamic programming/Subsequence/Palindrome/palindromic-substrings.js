// https://leetcode.cn/problems/palindromic-substrings/
var countSubstrings = function(s) {
    // 1、dp[i][j]含义：表示下标区间[i, j](j >= i)这个字符串是否是回文子串dp[i][j]
    // 2、dp[i][j]初始化: dp[i][i] = false
    let dp = new Array(s.length)
    let res = 0
    for (let i = 0; i < s.length; i++) {
        dp[i] = new Array(s.length).fill(false)
        dp[i][i] = true
        res++
    }
    // 3、dp递推顺序：由下到上，由左至右
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) {
            // 4、dp递推公式
            if (s[i] == s[j]) {
                if (j - i == 1) {
                    dp[i][j] = true
                }
                else {
                    dp[i][j] = dp[i+1][j-1]
                }
            }
            if (dp[i][j]) {
                res++
            }
        }
    }
    return res
};