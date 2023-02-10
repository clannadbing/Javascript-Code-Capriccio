# <center>最大化最小值 or 最小化最大值

[2560. 打家劫舍iv](https://leetcode.cn/problems/house-robber-iv/)

看到**【最大化最小值】**或者**【最小化最大值】**就要想到**二分答案** ！！！这是一个固定套路

why? 一般来说，二分的值越大，二分的值越大，越能/不能满足要求；二分的值越小，越不能/能满足要求，有单调性，可以二分。

### <font color = 'green'> 思路</font>

跟据题意我们可以得到以下结论：

1. 小偷的最大窃取金额一定在``nums[]``中
2. 假如**窃取的金额都不超过``nums[i]``时**能访问的最大房间数为``cnt(nums[i])``，**窃取的金额都不超过``nums[j] (nums[j]>=nums[i])``**时能访问的最大房间数为``cnt(nums[j])``，那么``cnt(nums[j])>=cnt(nums[i])``；即有单调性

### <font color = 'green'>二分算法</font>

根据以上分析我们可以使用**二分算法**求解本题目

1. 我们首先将可能为答案的`最大窃取金额`从小到大排序，存储在`cashes[]`数组中
2. 我们在`[0, n-1]`范围内部使用二分算法搜索能访问房间大于等于k时最小的`cashes[]`。初始时`left=0, right=n-1`；令`mid=(left+right)/2`;计算当窃取的最大金额为`cashes[mid] `时最大的可能访问房间数`cnt(cashes[mid])`
   * 如果`cnt(cashes[mid])>=k`，说明最大金额小于`cashes[mid]`时的访问房间数目有可能大于等于`k`，因此可以在`[left, mid-1]`范围内二分搜索答案
   * 如果`cnt(cashes[mid])<k`，说明最大金额只有大于`cashes[mid]`时的访问房间数目才有可能大于等于`k`，因此需要在`[mid+1, right]`范围内二分搜索答案

### <font color = 'green'>动态规划</font>

1. `dp[i]`含义：到第`i`间房屋窃取金额不超过`cnt(cashes[mid])`窃取的房屋数量为`dp[i]`
2. `dp[i]`初始化: `dp[0]、dp[1]`均要初始化，注意相邻房间不能偷！！！
3. `dp`递推顺序：由左向右
4. `dp`递推公式
   * 不选第`i`个房屋：`dp[i] = dp[i-1]`
   * 选第``i``个房屋，前提是金额不超过``cnt(cashes[mid])``：``dp[i] = Max(dp[i-1], dp[i-2]+1)``

### <font color = 'green'>实现</font>

```javascript
var minCapability = function(nums, k) {
    // 动态规划
    var check = function (target, k) {
        // 1. dp[i]含义：到第i间房屋窃取金额不超过target窃取的房屋数量为dp[i]
        // 2. dp[i]初始化：注意相邻房间不能偷
        let dp = new Array(nums.length).fill(0)
        if (nums[0] <= target) {
            dp[0] = 1
        }
        if (nums[0] <= target || nums[1] <= target) { // 这里的||很重要！！！！！
            dp[1] = 1
        }
        // 3. dp递推顺序：由左向右
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
```

### <font color='green'>类似题目</font>

[2439. 最下化数组中的最大值](https://leetcode.cn/problems/minimize-maximum-of-array/)

[2513. 最小化两个数组中的最大值](https://leetcode.cn/problems/minimize-the-maximum-of-two-arrays/)

[2517. 礼盒的最大甜蜜度](https://leetcode.cn/problems/maximum-tastiness-of-candy-basket/)

[2528. 最大化城市的最小供电站数目](https://leetcode.cn/problems/maximize-the-minimum-powered-city/)

