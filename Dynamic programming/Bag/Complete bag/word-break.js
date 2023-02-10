// https://leetcode.cn/problems/word-break/
// idea: https://programmercarl.com/0139.%E5%8D%95%E8%AF%8D%E6%8B%86%E5%88%86.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
var wordBreak = function(s, wordDict) {
    // 1. dp[j]:容量为j的背包能否被物品装满;能装满dp[j]为true,否则为false
    // 2. dp初始化：dp[0] = true
    let dp = new Array(s.length+1).fill(false)
    dp[0] = true
    // 3. dp递推顺序：先背包, 后物品(排列问题)
    for (let j = 0; j <= s.length; j++) {
        for (let i = 0; i < wordDict.length; i++) {
            if(j >= wordDict[i].length) {
                // 4. dp递推公式
                if(s.slice(j - wordDict[i].length, j) === wordDict[i] && dp[j - wordDict[i].length]) {
                    // 注意：dp[j - wordDict[i].length] --> s.slice(0, j - wordDict[i]) --> 由定义推出
                    dp[j] = true
                }
            }
        }
    }
    return dp[s.length]
};