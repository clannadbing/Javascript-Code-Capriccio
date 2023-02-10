// https://leetcode.cn/problems/find-bottom-left-tree-value/
// idea: https://programmercarl.com/0513.%E6%89%BE%E6%A0%91%E5%B7%A6%E4%B8%8B%E8%A7%92%E7%9A%84%E5%80%BC.html
var findBottomLeftValue = function(root) {
    let maxDepth = -Infinity
    let res 
    var DFS = function(curr, depth) {
        if(maxDepth < depth) {
            maxDepth = depth
            res = curr.val
        }
        if(curr.left == null && curr.right == null) {
            return
        }
        if(curr.left) {
            depth++
            DFS(curr.left, depth)
            depth--
        }
        if(curr.right) {
            depth++
            DFS(curr.right, depth)
            depth--
        }
    }
    DFS(root, 1)
    return res
};