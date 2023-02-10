// https://leetcode.cn/problems/search-in-a-binary-search-tree/
var searchBST = function(root, val) {
    if (root == null) {
        return null
    }
    if (root.val == val) {
        return root
    }
    let res = null
    if (root.val > val) {
        res = searchBST(root.left, val)
    }
    if(root.val < val) {
        res = searchBST(root.right, val)
    }
    return res
};