// https://leetcode.cn/problems/path-sum-ii/
// idea: https://programmercarl.com/0112.%E8%B7%AF%E5%BE%84%E6%80%BB%E5%92%8C.html#%E6%80%9D%E8%B7%AF
var pathSum = function(root, targetSum) {
    let res = []
    let path = []
    if(root == null) {
        return res
    }
    var DFS = function(curr, sum, targetSum) {
        path.push(curr.val)
        if (curr.left == null && curr.right == null) {
            if (sum == targetSum) {
                res.push(path.slice())
                return
            }
            return 
        }
        if (curr.left) {
            sum = sum + curr.left.val
            DFS(curr.left, sum, targetSum)
            sum = sum - curr.left.val
            path.pop()
        }
        if (curr.right) {
            sum = sum + curr.right.val
            DFS(curr.right, sum, targetSum)
            sum = sum - curr.right.val
            path.pop()
        }
    }
    DFS(root, root.val, targetSum)
    return res
};