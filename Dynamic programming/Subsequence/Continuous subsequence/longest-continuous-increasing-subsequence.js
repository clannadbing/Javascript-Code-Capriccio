// https://leetcode.cn/problems/longest-continuous-increasing-subsequence/
var findLengthOfLCIS = function(nums) {
    // 1、dp[i]含义：表示以坐标i结尾的最长连续子序列长度为dp[i]
    // 2、dp初始化: dp[i] = 1
    let dp = new Array(nums.length).fill(1)
    // 3、dp递推顺序：由小到大
    for (let i = 1; i < nums.length; i++) {
        // 4、dp递推公式
        if (nums[i] > nums[i-1]) {
            dp[i] = dp[i-1]+1
        }
    }
    return Math.max(...dp)
};