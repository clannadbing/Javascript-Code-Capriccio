// https://leetcode.cn/problems/house-robber-iv/
// idea: https://leetcode.cn/problems/house-robber-iv/solution/er-fen-suan-fa-dong-tai-gui-hua-by-4z9-2rhl/
var minCapability = function(nums, k) {
    // 动态规划
    var check = function (target, k) {
        // 1. dp[i]含义：到第i间房屋窃取金额不超过target窃取的房屋数量为dp[i]
        // 2. dp[i]初始化
        // 3. dp递推顺序：由左向右
        let dp = new Array(nums.length).fill(0)
        if (nums[0] <= target) {
            dp[0] = 1
        }
        if (nums[0] <= target || nums[1] <= target) { // 这里的||很重要！！！！！
            dp[1] = 1
        }
        for (let i = 2; i < nums.length; i++) {
            // 房屋金额小于等于窃取能力
            if (nums[i] <= target) {
                // 4.dp递推公式
                dp[i] = Math.max(dp[i-1], dp[i-2] + 1)
            }
            // 房屋金额大于等于窃取能力
            else {
                dp[i] = dp[i-1]
            }
        }
        console.log(dp)
        if (dp[nums.length-1] >= k) {
            return true
        }
        return false
    }
    // 二分
    let cashes = nums.slice() // 这里的使用拷贝很重要！！！！！ --> 不然cashes与nums指向同一处地址
    cashes = cashes.sort(function(a, b){ return a-b})
    let left = 0
    let right = cashes.length - 1
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (check(cashes[mid], k)) {
            right = mid - 1
        }
        else {
            left = mid + 1
        }
    }
    return cashes[left]
};