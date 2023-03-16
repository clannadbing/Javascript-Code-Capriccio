// https://leetcode.cn/problems/left-and-right-sum-differences/
var leftRigthDifference = function(nums) {
    let preSum = new Array(nums.length).fill(0)
    for (let i = 1; i < nums.length; i++) {
        preSum[i] = preSum[i-1] + nums[i-1]
    }
    console.log(preSum)
    nums = nums.reverse()
    let nextSum = new Array(nums.length).fill(0)
    for (let j = 1; j < nums.length ; j++) {
        nextSum[j] = nextSum[j-1] + nums[j-1]
    }
    nextSum = nextSum.reverse()
    console.log(nextSum)
    let res = []
    for (let i = 0; i < preSum.length; i++) {
        res[i] = Math.abs(preSum[i] - nextSum[i])
    }
    return res
};