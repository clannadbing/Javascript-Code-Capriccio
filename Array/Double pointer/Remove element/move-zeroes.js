// https://leetcode.cn/problems/move-zeroes/
var moveZeroes = function(nums) {
    let slow = 0
    for(var fast = 0; fast < nums.length; fast++){ // fast作为全局变量
        if(nums[fast] != 0){
            nums[slow++] = nums[fast]
        }
    }
    for(let i = slow; i < fast; i++){
        nums[i] = 0
    }
    return nums
};