// https://leetcode.cn/problems/maximum-subarray/
// 方法一：一维dp
var maxSubArray = function(nums) {
    // 1、dp[i]含义:表示以i结尾的连续子数组最大和是dp[i]
    // 2、dp[i]初始化：dp[0] = nums[0]
    let dp = new Array(nums.length).fill(0)
    dp[0] = nums[0]
    let res  = nums[0]
    // 3、dp递推顺序：自左向右, 自上而下
    for (let i = 1; i < nums.length; i++) {
        // 4、dp递推公式
            dp[i] = Math.max(dp[i-1] + nums[i], nums[i])
            if (dp[i] > res) {
                res = dp[i]
            } 
    }
    return res
};
// 方法二：二维dp
var maxSubArray = function(nums) {
    // 1、dp[i][j]含义:表示连续子数组区间[i,j]的和为dp[i][j]
    // 2、dp[i][j]初始化：dp[0][j] = nums[0]+...+nums[j], dp[i][i] = nums[i]
    let dp = new Array(nums.length)
    for (let i = 0; i < nums.length; i++) {
        dp[i] = new Array(nums.length).fill(-Infinity)
    }
    let sum = 0
    let res  = -Infinity
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
        dp[0][i] = sum
        dp[i][i] = nums[i]
        if (dp[0][i] > res || dp[i][i] > res) {
            res = Math.max(dp[0][i], dp[i][i])
        } 
    }
    // 3、dp递推顺序：自左向右, 自上而下
    for (let i = 1; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            // 4、dp递推公式
            dp[i][j] = Math.max(dp[i][j-1] + nums[j], nums[j])
            if (dp[i][j] > res) {
                res = dp[i][j]
            } 
        }
    }
    return res
};