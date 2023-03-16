// https://leetcode.cn/problems/split-the-array-to-make-coprime-products/
var findValidSplit = function(nums) {
    var gcd = function(nums1, nums2) {
        while(nums2 != 0) {
            let temp = nums1
            nums1 = nums2
            nums2 = temp % nums2 
        }
        return nums1
    }
    if (nums.length == 1) {
        return -1
    }
    let k = 1
    for(let i = 0; i < k; i++) {
        for (let j = Math.max(i+1,k); j < nums.length; j++) {
            if (gcd(nums[i], nums[j]) != 1) {
                k = j+1 
            }
        }
    }
    if (k > nums.length-1) {
        return -1
    }
    return k-1
};