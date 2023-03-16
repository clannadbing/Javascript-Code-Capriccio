// https://leetcode.cn/problems/find-the-maximum-number-of-marked-indices/
// 方法一：二分答案
var maxNumOfMarkedIndices = function(nums) {
    nums = nums.sort(function(a, b){return a-b})
    let left = 0
    let right = Math.floor(nums.length / 2)
    var check = function(nums, mid) {
        for (let i = 0; i < mid; i++) {
            if (nums[i]*2 > nums[nums.length-mid+i]) {
                return false
            }
        }
        return true
    }
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (check(nums, mid)) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return right*2
};
// 方法二：贪心+双指针
var maxNumOfMarkedIndices = function(nums) {
    nums = nums.sort(function(a, b){return (a-b)})
    let mid = Math.floor(nums.length / 2)
    let left = nums.slice(0, mid)
    let right = nums.slice(mid, nums.length)
    let res = 0
    if (nums.length == 1) {
        return res
    }
    let i = 0
    let j = 0
    while ((i < left.length) && (j < right.length)) {
        if (2*left[i] <= right[j]) {
            i++
            j++
            res = res + 2
        }
        else {
            j++
        }
    }
    return res
};