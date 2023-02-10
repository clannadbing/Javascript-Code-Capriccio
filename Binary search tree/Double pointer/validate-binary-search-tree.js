// https://leetcode.cn/problems/validate-binary-search-tree/
// idea: https://programmercarl.com/0098.%E9%AA%8C%E8%AF%81%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91.html#%E9%80%92%E5%BD%92%E6%B3%95
var isValidBST = function(root) {
    let prve = null
    var DFS = function(root){
        if (root == null) {
            return true
        }
        let left = DFS(root.left)
        if (prve != null && prve.val >= root.val) {
            return false
        }
        prve = root
        let right = DFS(root.right)
        return left && right
    }
    return DFS(root)
};