// https://leetcode.cn/problems/find-mode-in-binary-search-tree/
// idea: https://programmercarl.com/0501.%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%9A%84%E4%BC%97%E6%95%B0.html#%E9%80%92%E5%BD%92%E6%B3%95
var findMode = function(root) {
    let prve = null
    let count = 0
    let maxcount = -Infinity
    let res = []
    var DFS = function(root) {
        if (root == null) {
            return 
        }
        DFS(root.left)
        if (prve != null && prve.val == root.val) {
            count++
        }
        else {
            count = 0
        }
        if(count == maxcount) {
            res.push(root.val)
        }
        if (count > maxcount) {
            res = []
            maxcount = count
            res.push(root.val)
        }
        prve = root
        DFS(root.right)
    }
    DFS(root)
    return res
};