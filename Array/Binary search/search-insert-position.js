// https://leetcode.cn/problems/search-insert-position/
var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while(left <= right){
        var mid = Math.floor(left + (right - left) / 2)
        if(nums[mid] < target){
            left = mid + 1
        }
        else if(nums[mid] > target){
            right = mid - 1
        }
        else{
            return mid
        }
    }
    return left // 或者return right+1
    // [1,3,5,6]
    // 第一种情况 target < nums[0]
    // 0,3 --> 1
    // 0,0 --> 0 
    // left:0  right: -1
    // 第二种情况 nums[0] < target < nums[nums.length-1] 2
    // 0,3 --> 1
    // 0,0 --> 0
    // left: 1  right: 0
    // 第三种情况 target > nums[nums.length-1]
    // 0,3 --> 1
    // 2,3 --> 2
    // 3,3 --> 3
    // left: 4 right:3
};