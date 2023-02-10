// https://leetcode.cn/problems/maximum-binary-tree/
var constructMaximumBinaryTree = function(nums) {
    if (nums.length == 0) {
        return null
    }
    let maxvalue = Math.max(...nums)
    let root = new TreeNode(maxvalue)
    let index = nums.indexOf(maxvalue) 
    if (nums.length == 1) {
        return root
    }
    let leftnums = nums.slice(0, index)
    let rightnums = nums.slice(index+1, nums.length)
    root.left = constructMaximumBinaryTree(leftnums)
    root.right = constructMaximumBinaryTree(rightnums)
    return root
};