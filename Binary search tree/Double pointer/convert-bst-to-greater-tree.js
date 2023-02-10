// https://leetcode.cn/problems/convert-bst-to-greater-tree/
var convertBST = function(root) {
    let prve = null
    var DFS = function(curr) {
        if(curr == null) {
            return
        }
        DFS(curr.right)
        if(prve != null) {
            curr.val = curr.val + prve.val
        }
        prve = curr
        DFS(curr.left)
    }
    DFS(root)
    return root
};