// https://leetcode.cn/problems/longest-increasing-subsequence/
var lengthOfLIS = function(nums) {
    // 1. dp[i]含义：表示以下标i为结尾的最长严格递增子序列的长度
    // 2. dp[i]初始化：每一个i，对应的dp[i]（即最长递增子序列）起始大小至少都是1
    let dp = new Array(nums.length).fill(1)
    let res = []
    // 3. dp递推顺序：由小到大
    for (let i = 0; i < nums.length; i++) {
        // 4. dp递推表达式
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        res.push(dp[i])
    }
    return Math.max(...res)
};