// https://leetcode.cn/problems/delete-operation-for-two-strings/
var minDistance = function(word1, word2) {
    // 1、dp[i][j]含义：表示word1以i-1结尾, word2以j-1结尾相同所需的最小步数为dp[i][j]
    // 2、dp[i][j]初始化：dp[0][j] = j, dp[i][0] = i, dp[0][0] = 0
    let dp = new Array(word1.length+1)
    for (let i = 0; i <= word1.length; i++) {
        dp[i] = new Array(word2.length+1).fill(0)
    }
    for (let i = 0; i <= word1.length; i++) {
        dp[i][0] = i
    }
    for (let j = 0; j <= word2.length; j++) {
        dp[0][j] = j
    }
    // 3、dp遍历顺序：由上到下, 由左到右
    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            // 4、dp递推公式
            if (word1[i-1] == word2[j-1]) {
                dp[i][j] = dp[i-1][j-1] 
            }
            else {
                dp[i][j] = Math.min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+2) // 删除word1[i-1]、word2[j-1]、以及删除两者
            }
        }
    }
    return dp[word1.length][word2.length]
};