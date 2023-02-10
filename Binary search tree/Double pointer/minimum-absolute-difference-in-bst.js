// https://leetcode.cn/problems/minimum-absolute-difference-in-bst/
var getMinimumDifference = function(root) {
    let prve = null
    let num = Infinity
    var DFS = function(root) {
        if(root == null) {
            return 
        }
        DFS(root.left)
        if(prve != null && (root.val - prve.val) < num) {
            num = root.val - prve.val
        }
        prve = root
        DFS(root.right)
    }
    DFS(root)
    return num
};