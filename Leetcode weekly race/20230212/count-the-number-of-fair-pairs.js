// https://leetcode.cn/problems/count-the-number-of-fair-pairs/submissions/
// lower - nums[j] <= nums[i] <= upper - nums[j]
// 枚举：nums[j]
// 排序 + 二分 --> nlogn
var countFairPairs = function(nums, lower, upper) {
    nums = nums.sort(function(a, b){return a - b})
    let res = 0
    var leftbinnarysearch = function (target) {
        let left = 0
        let right = nums.length - 1
        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2) 
            if (nums[mid] < target) {
                left = mid + 1
            }
            else if (nums[mid] > target) {
                right = mid - 1
            }
            else {
                right = mid - 1
            }
        }
        return left
    }
    var rightbinnarysearch = function (target) {
        let left = 0
        let right = nums.length - 1
        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2) 
            if (nums[mid] < target) {
                left = mid + 1
            }
            else if (nums[mid] > target) {
                right = mid - 1
            }
            else {
                left = mid + 1
            }    
        }
        return right
    }
    for (let j = 0; j < nums.length; j++) {
        let start = leftbinnarysearch(lower - nums[j])
        let end = rightbinnarysearch(upper - nums[j])
        if ((j >= start) && (j <= end)) {
            res += end -start
        }
        else {
            res += end - start + 1
        }
    }
    return res / 2
};