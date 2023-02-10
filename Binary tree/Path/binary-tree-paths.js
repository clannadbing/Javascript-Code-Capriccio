// https://leetcode.cn/problems/binary-tree-paths/
// idea: https://programmercarl.com/0257.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%89%80%E6%9C%89%E8%B7%AF%E5%BE%84.html#%E9%80%92%E5%BD%92
var binaryTreePaths = function(root) {
    let res1 = []
    let path = []
    var DFS = function(curr) {
        path.push(curr.val)
        if (curr.left == null && curr.right == null) {
            res1.push(path.slice())
            return 
        }
        if (curr.left) {
            DFS(curr.left)
            path.pop()
        }
        if (curr.right) {
            DFS(curr.right)
            path.pop()
        }
    }
    DFS(root)
    let res2 = []
    for (let i = 0; i < res1.length; i++) {
        let temp = ''
        for (let j = 0; j < res1[i].length; j++) {
            if (j == res1[i].length - 1) {
                temp = temp.concat(res1[i][j])
            }
            else {
                temp = temp.concat(res1[i][j], '->')
            }
        }
        res2.push(temp)
    }
    return res2
};