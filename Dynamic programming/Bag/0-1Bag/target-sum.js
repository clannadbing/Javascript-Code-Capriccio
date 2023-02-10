// https://leetcode.cn/problems/target-sum/
// idea: https://leetcode.cn/problems/target-sum/solution/mu-biao-he-by-leetcode-solution-o0cp/
var findTargetSumWays = function(nums, target) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
    }
    if (sum < Math.abs(target)) {
        return 0
    }
    if ((sum + target) % 2 != 0) {
        return 0
    }
    let left = (sum + target) / 2
    // 1. dp[j]含义：填满背包容量j有dp[j]种方法 --> 这次和之前遇到的背包问题不一样了，之前都是求容量为j的背包，最多能装多少。本题则是装满有几种方法。其实这就是一个组合问题了。
    // 2. dp[j]初始化： dp[0] = 1(重点) --> 也就是说给数组里的元素 0 前面无论放加法还是减法, 都是 1 种方法
    let dp = new Array(left+1).fill(0)
    dp[0] = 1
    // 3. dp递推顺序：先物品，后背包(逆序)
    for (let i = 0; i < nums.length; i++) {
        for (let j = left; j >= nums[i]; j--) {
            // 4. dp递推公式 --> 重点理解这个递推公式(重点)
            // 有哪些来源可以推出dp[j]呢？--> 由于二维数组推导dp[i][j]:在[0,i]物品中选着使得这些重量之和等于背包j的方案数是dp[i][j]
            // 4.1 如果 j < nums[i] --> 不能选nums[i], dp[i][j] = dp[i-1][j]
            // 4.2 如果 j > nums[i] --> 如果不选nums[i], 方案数为dp[i-1][j]; 如果选nums[i], 方案数为dp[i-1][j-nums[i]];即dp[i][j] = dp[i-1][j] + dp[i-1][j-nums[i]] --> 一维滚动数组：dp[j] = dp[j] + dp[j-nums[i]]
            // 所以求组合类问题的公式，都是类似这种:
            dp[j] = dp[j] + dp[j-nums[i]] 
        }
    }
    return dp[left]
};