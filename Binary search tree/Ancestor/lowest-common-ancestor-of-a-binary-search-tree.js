// https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/
// idea: https://programmercarl.com/0235.%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E7%9A%84%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88.html#%E9%80%92%E5%BD%92%E6%B3%95
// 递归法
var lowestCommonAncestor = function(root, p, q) {
    if (root == null) {
        return null
    }
    if (root.val > p.val && root.val > q.val) {
        let left = lowestCommonAncestor(root.left, p, q)
        return left
    }
    if (root.val < p.val && root.val < q.val) {
        let right = lowestCommonAncestor(root.right, p, q)
        return right
    }
    return root
};
// 迭代法
var lowestCommonAncestor = function(root, p, q) {
    while(root != null) {
        if(root.val > p.val && root.val > q.val) {
            root = root.left
        }
        else if(root.val < p.val && root.val < q.val) {
            root = root.right
        }
        else {
            return root
        }
    }
};