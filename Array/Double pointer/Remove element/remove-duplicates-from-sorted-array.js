// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
// idea: 快慢指针法
var removeDuplicates = function(nums) {
    let slow = 0
    for(let fast = 0; fast < nums.length; fast++){
        if(fast == 0 || (fast > 0 && nums[fast] != nums[fast-1])){
            nums[slow++] = nums[fast]
        }
    }
    return slow
};