// https://leetcode.cn/problems/merge-two-binary-trees/
// 递归
var mergeTrees = function(root1, root2) {
    if (root1 == null) {
        return root2
    }
    if (root2 == null) {
        return root1
    }
    root1.val = root1.val + root2.val
    root1.left = mergeTrees(root1.left, root2.left)
    root1.right = mergeTrees(root1.right, root2.right)
    return root1 
};
// 迭代
var mergeTrees = function(root1, root2) {
    if (root1 === null) return root2;
    if (root2 === null) return root1;
    let queue = [];
    queue.push(root1);
    queue.push(root2);
    while (queue.length) {
        let node1 = queue.shift();
        let node2 = queue.shift();;
        node1.val += node2.val;
        if (node1.left !== null && node2.left !== null) {
            queue.push(node1.left);
            queue.push(node2.left);
        }
        if (node1.right !== null && node2.right !== null) {
            queue.push(node1.right);
            queue.push(node2.right);
        }
        if (node1.left === null && node2.left !== null) {
            node1.left = node2.left;
        }
        if (node1.right === null && node2.right !== null) {
            node1.right = node2.right;
        } 
    }
    return root1;
};