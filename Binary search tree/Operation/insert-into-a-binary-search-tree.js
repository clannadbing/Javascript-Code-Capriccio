// https://leetcode.cn/problems/insert-into-a-binary-search-tree/
var insertIntoBST = function(root, val) {
    if (root == null) {
        let Node = new TreeNode(val)
        return Node 
    }
    if (root.val > val) {
        root.left = insertIntoBST(root.left, val)
    }
    if (root.val < val) {
        root.right = insertIntoBST(root.right, val)
    }
    return root
};