// https://leetcode.cn/problems/count-complete-tree-nodes/
// idea: https://programmercarl.com/0222.%E5%AE%8C%E5%85%A8%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E8%8A%82%E7%82%B9%E4%B8%AA%E6%95%B0.html#%E5%AE%8C%E5%85%A8%E4%BA%8C%E5%8F%89%E6%A0%91

// 1. 普通二叉树解法
var countNodes = function(root) {
    var DFS = function(curr) {
        if(curr == null) {
            return 0
        }
        let leftnum = DFS(curr.left)
        let rightnum = DFS(curr.right)
        let res = 1 + leftnum + rightnum
        return res
    }
    return DFS(root)
};

// 2.完全二叉树解法
// 核心关键点：在完全二叉树中，如果递归向左遍历的深度等于递归向右遍历的深度，那说明就是满二叉树
var countNodes = function(root) {
    var DFS = function(curr) {
        if (curr == null) {
            return 0
        }
        let leftnode = curr.left
        let rightnode = curr.right
        let leftdepth = 0
        let rightdepth = 0
        while (leftnode) {
            leftnode = leftnode.left
            leftdepth++
            console.log(leftdepth)
        }
        while (rightnode) {
            rightnode = rightnode.right
            rightdepth++
        }
        if (rightdepth == leftdepth) {
            return (2 << leftdepth) - 1
        }       
        let leftnum = DFS(curr.left)
        let rightnum = DFS(curr.right)
        let res = 1 + leftnum + rightnum
        return res
    }
    return DFS(root)
};