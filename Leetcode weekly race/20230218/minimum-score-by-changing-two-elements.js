// https://leetcode.cn/problems/minimum-score-by-changing-two-elements/
var minimizeSum = function(nums) {
    nums = nums.sort(function(a, b) {return a-b})
    return Math.min(nums[nums.length-1] - nums[2], nums[nums.length-3] - nums[0], nums[nums.length-2] - nums[1])
};