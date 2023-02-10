// https://leetcode.cn/problems/two-sum/
var twoSum = function(nums, target) {
    let map = new Map()
    let res = []
    for(let i = 0; i < nums.length; i++) {
        if(!map.has(nums[i])) {
            map.set(target - nums[i], i)
        }
        else {
            res.push(map.get(nums[i]))
            res.push(i)
        }
    }
    return res
};