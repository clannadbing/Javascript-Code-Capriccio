// https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/
// idea: https://programmercarl.com/0236.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88.html#java
var lowestCommonAncestor = function(root, p, q) {
    if (root == null) {
        return root
    }
    if (root == p || root == q) {
        return root
    }
    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)
    if (left != null && right != null) {
        return root
    }  
    else if (left == null && right != null) {
        return right
    }
    else if (left != null && right == null) {
        return left
    }
    else {
        return null
    }
};