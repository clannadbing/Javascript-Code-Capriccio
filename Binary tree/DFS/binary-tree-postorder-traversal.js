// https://leetcode.cn/problems/binary-tree-postorder-traversal/
var postorderTraversal = function(root) {
    let res = []
    var DFS = function(root) {
        if(root == null) {
            return
        }
        DFS(root.left)
        DFS(root.right)
        res.push(root.val)
    }
    DFS(root)
    return res
};