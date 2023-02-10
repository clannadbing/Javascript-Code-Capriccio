// https://leetcode.cn/problems/last-stone-weight-ii/
var lastStoneWeightII = function(stones) {
    // dp[j]含义：背包容量为j的最大价值(重量)为dp[j]
    // dp[j]初始化：dp[0] = 0
    let sum = 0
    for (let i = 0; i < stones.length; i++) {
        sum = sum + stones[i]
    }
    let target = Math.floor(sum / 2)
    let dp = new Array(1501).fill(0)
    // 递推顺序：先物品，后背包(逆序)
    for (let i = 0; i < stones.length; i++) {
        for (let j = target; j >= stones[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j-stones[i]]+stones[i])
        }
    }
    let res = sum - 2*dp[target]
    return res
};