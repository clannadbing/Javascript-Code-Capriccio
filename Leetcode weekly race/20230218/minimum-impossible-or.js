// https://leetcode.cn/problems/minimum-impossible-or/
var minImpossibleOR = function(nums) {
    let mask = 0
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] & nums[i] - 1) == 0) {
            mask |= nums[i] 
        }
    }
    mask = ~mask
    lowbit = mask & -mask
    return lowbit
};