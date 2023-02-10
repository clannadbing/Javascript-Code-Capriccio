// https://leetcode.cn/problems/binary-tree-preorder-traversal/
var preorderTraversal = function(root) {
    let res = []
    var DFS = function(root) {
        if(root == null) {
            return
        }
        res.push(root.val)
        DFS(root.left)
        DFS(root.right)
    }
    DFS(root)
    return res
};