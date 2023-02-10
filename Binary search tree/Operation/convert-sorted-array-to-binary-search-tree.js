// https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/
// 区间：左闭右开
var sortedArrayToBST = function(nums) {
    var DFS = function(nums, left, right) {
        if(left >= right) {
            return null
        }
        let mid = Math.floor((left + right - 1)/2)
        let root = new TreeNode(nums[mid])
        root.left = DFS(nums, left, mid)
        root.right = DFS(nums, mid+1, right)
        return root
    }
    return DFS(nums, 0, nums.length)
};
// 区间：左闭右闭
var sortedArrayToBST = function(nums) {
    var DFS = function(nums, left, right) {
        if(left > right) {
            return null
        }
        let mid = Math.floor((left + right)/2)
        let root = new TreeNode(nums[mid])
        root.left = DFS(nums, left, mid-1)
        root.right = DFS(nums, mid+1, right)
        return root
    }
    return DFS(nums, 0, nums.length-1)
};