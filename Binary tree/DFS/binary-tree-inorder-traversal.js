// https://leetcode.cn/problems/binary-tree-inorder-traversal/
var inorderTraversal = function(root) {
    let res = []
    var DFS = function(root) {
        if(root == null) {
            return
        }
        DFS(root.left)        
        res.push(root.val)
        DFS(root.right)
    }
    DFS(root)
    return res
};