// https://leetcode.cn/problems/partition-equal-subset-sum/
var canPartition = function(nums) {
    // 1. dp[j]含义:背包容量为j的最大价值(重量)是dp[j]
    // 2. dp[j]初始化：dp[0] = 0
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
    }
    if (sum % 2 != 0) {
        return false
    }
    let target = Math.floor(sum / 2)
    let dp = new Array(10001).fill(0)
    // 3. dp遍历顺序:先遍历物品, 再遍历背包(逆序遍历)
    for (let i = 0; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) {
            // 4. dp递推公式
            dp[j] = Math.max(dp[j], dp[j-nums[i]]+nums[i])
        }
    }
    if (dp[target] == target) {
        return true
    }
    return false
};