// https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/
var searchRange = function(nums, target) {
    let res = [-1,-1]
    let left1 = 0
    let right1 = nums.length-1
    let left2 = 0
    let right2 = nums.length-1
    // 寻找左侧target
    while(left1 <= right1){
        let mid = Math.floor(left1 + (right1 - left1)/2)
        if(nums[mid] < target){
            left1 = mid + 1
        }
        else if(nums[mid] > target){
            right1 = mid - 1
        }
        else{
            right1 = mid - 1
        }
    }
    if(nums[left1] == target && left1 >= 0){
        res[0] = left1
    }
    // nums = [5,7,7,8,8,10]
    // 0, 5 --> 2
    // 3, 5 --> 4
    // 3, 3 --> 3
    // left: 3 , right: 2

    // 寻找右侧target
    while(left2 <= right2){
        let mid = Math.floor(left2 + (right2 - left2)/2)
        if(nums[mid] < target){
            left2 = mid + 1
        }
        else if(nums[mid] > target){
            right2 = mid - 1
        }
        else{
            left2 = mid + 1
        }
    }
    if(nums[right2] == target && right2 < nums.length){
        res[1] = right2
    }
    // nums = [5,7,7,8,8,10]
    // 0, 5 --> 2
    // 3, 5 --> 4
    // 5, 5 --> 5
    // left: 5 , right: 4    
    return res
};