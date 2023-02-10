// https://leetcode.cn/problems/same-tree/
var isSameTree = function(p, q) {
    var DFS = function(leftnode, rightnode) {
        if (leftnode == null && rightnode != null) {
            return false
        }
        else if (leftnode != null && rightnode == null) {
            return false
        }
        else if (leftnode == null && rightnode == null) {
            return true
        }
        else if (leftnode.val != rightnode.val) {
            return false
        }
        let left = DFS(leftnode.left, rightnode.left)
        let right = DFS(leftnode.right, rightnode.right)
        res = left && right
        return res
    }
    return DFS(p, q)
};