// https://leetcode.cn/problems/4sum/
var fourSum = function(nums, target) {
    nums = nums.sort(function(a, b){return a - b})
    let res = []
    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] == nums[i-1]) {
            continue
        }
        for(let j = i + 1; j < nums.length; j++) {
            if(j > i + 1 && nums[j] == nums[j-1]) {
                continue
            }
            let left = j + 1
            let right = nums.length - 1
            while(left < right) {
                if(nums[i] + nums[j] + nums[left] + nums[right] < target) {
                    left++
                }
                else if(nums[i] + nums[j] + nums[left] + nums[right] > target) {
                    right--
                }
                else {
                    res.push([nums[i], nums[j], nums[left], nums[right]])
                    while(left < right && nums[left] == nums[left+1]) {
                        left++
                    }
                    while(left < right && nums[right] == nums[right-1]) {
                        right--
                    }
                    left++
                    right--
                }
            } 
        }
    }
    return res
};