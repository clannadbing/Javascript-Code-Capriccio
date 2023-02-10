// https://leetcode.cn/problems/subtree-of-another-tree/
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
}
var isSubtree = function(root, subRoot) {
    var DFS = function(curr) {
        if (curr == null) {
            return false
        }
        let res = isSameTree(curr, subRoot)
        let left = DFS(curr.left)
        let right = DFS(curr.right)
        return res || left || right
    } 
    return DFS(root)
};