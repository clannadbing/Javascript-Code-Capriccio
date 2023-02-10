// https://leetcode.cn/problems/remove-element/
// idea: https://programmercarl.com/0027.%E7%A7%BB%E9%99%A4%E5%85%83%E7%B4%A0.html#%E6%80%9D%E8%B7%AF
// 暴力求解
var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == val){
            nums.splice(i,1)
            i--
        }
    }
    return nums.length
};
// 快慢指针
var removeElement = function(nums, val) {
    let slow = 0
    for(let fast = 0; fast < nums.length; fast++){
        if(nums[fast] != val){
            nums[slow++] = nums[fast]
        }
    }
    return slow
}