// https://leetcode.cn/problems/trim-a-binary-search-tree/submissions/
// idea: https://programmercarl.com/0669.%E4%BF%AE%E5%89%AA%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91.html#%E9%80%92%E5%BD%92%E6%B3%95
var trimBST = function(root, low, high) {
    if (root == null) {
        return null
    }
    // 寻找符合区间[low, high]的节点
    if (root.val < low) { 
        let right = trimBST(root.right, low, high)
        return right
    }
    // 寻找符合区间[low, high]的节点
    if (root.val > high) {
        let left = trimBST(root.left, low, high)
        return left
    }
    // root->left接入符合条件的左孩子
    if (root.left) {
        root.left = trimBST(root.left, low, high)
    }
    // root->right接入符合条件的右孩子
    if (root.right) {
        root.right = trimBST(root.right, low, high)
    }
    return root
};