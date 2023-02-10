// https://leetcode.cn/problems/ones-and-zeroes/
// idea: https://programmercarl.com/0474.%E4%B8%80%E5%92%8C%E9%9B%B6.html
var findMaxForm = function(strs, m, n) {
    // 1. dp[str][i][j]表示含义：在[0,str]物品中, 背包容量0的大小为i, 背包容量1的大小为j所能装的最多物品数量
    // 2. dp[str][i][j]初始化：dp[str][0][0] = 0
    let dp = new Array(m+1).fill(0)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n+1).fill(0)
    }
    // 3. dp递推顺序: 先物品(字符串，并统计字符串在两个维度上各自的重量)、后背包(二维数组顺序无所谓)
    for (let k = 0; k < strs.length; k++) {
        let str = strs[k]
        let x = 0
        let y = 0
        for (let i = 0; i < str.length; i++) {
            if (str[i] == '0') {
                x++
            }
            else {
                y++
            }
        }
        for (let i = m; i >= x; i--) {
            for (let j = n; j >= y; j--) {
                // 4. dp递推表达式：dp[str][i][j] = Math.max(dp[str-1][i][j], dp[str-1][i-x][j-y] + 1)(x = str.weight[0], y = str.weight[1]) --> 滚动数组:dp[i][j] = Math.max(dp[i][j], dp[i-x][j-y]+1)
                dp[i][j] = Math.max(dp[i][j], dp[i-x][j-y]+1)
            }
        }
    }
    return dp[m][n]
};