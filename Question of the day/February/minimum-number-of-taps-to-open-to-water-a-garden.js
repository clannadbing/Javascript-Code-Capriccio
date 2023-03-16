// https://leetcode.cn/problems/minimum-number-of-taps-to-open-to-water-a-garden/
var minTaps = function(n, ranges) {
    // 将左右双向灌溉问题转化为由左向右的单向跳跃游戏求解最小步数问题
    // 1. 情况1：i - ranges[i] <= 0 --> nums[0] = i + ranges[i]
    // 2. 情况2：i - ranges[i] > 0 --> nums[i-ranges[i]] = 2*ranges[i]
    let nums = new Array(ranges.length).fill(0)
    for (let i = 0; i < ranges.length; i++) {
        if (i - ranges[i] <= 0) {
            nums[0] = Math.max(nums[0], i + ranges[i])
        }
        else {
            nums[i - ranges[i]] = 2*ranges[i]
        }
    }
    console.log(nums) 
    let cover = 0
    let next = 0
    let res = 0
    for (let i = 0; i <= cover; i++) {
        next = Math.max(next, i + nums[i])
        if (i == cover) {
            if (i < nums.length - 1) {
                res++
                cover = next
            }
            else {
                return res
            }
        }
    }
    return -1
};