// https://leetcode.cn/problems/binary-search/
// 二分搜索条件：有序数组+无重复
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1 // 定义target在左闭右闭的区间里，[left, right]
    while(left <= right){ // 当left==right，区间[left, right]依然有效，所以用 <=
        let mid = Math.floor(left + (right - left) >> 2) // 防止溢出 等同于(left + right)/2
        if(nums[mid] < target){ // target 在右区间，所以[middle + 1, right]
            left = mid + 1 
        }
        else if(nums[mid] > target){ // target 在左区间，所以[left, middle - 1]
            right = mid - 1
        }
        else{ // 数组中找到目标值，直接返回下标
            return mid
        }
    }
    return -1
};