// https://leetcode.cn/problems/minimum-size-subarray-sum/
// idea: 滑动窗口
var minSubArrayLen = function(target, nums) {
    let length = 0
    let res = Infinity
    let sum = 0
    let start = 0
    for(let end = 0; end < nums.length; end++){
        sum += nums[end]
        length++
        while(sum >= target){
            res = Math.min(res, length) 
            sum = sum - nums[start]
            start++
            length--
        }
    }
    if(res == Infinity){
        res = 0
    }
    return res
};