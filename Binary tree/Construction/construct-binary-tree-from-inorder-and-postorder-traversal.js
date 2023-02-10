// https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
// idea: https://programmercarl.com/0106.%E4%BB%8E%E4%B8%AD%E5%BA%8F%E4%B8%8E%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86%E5%BA%8F%E5%88%97%E6%9E%84%E9%80%A0%E4%BA%8C%E5%8F%89%E6%A0%91.html#%E6%80%9D%E8%B7%AF
function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
}

var buildTree = function(inorder, postorder) {
    // 1. 数组大小为0, 空节点, 返回null
    if (postorder.length == 0) {
        return null
    }
    // 2. 后序遍历数组最后一个元素, 就是当前的中间节点
    let root  = new TreeNode(postorder[postorder.length-1])
    // 3. 数组长度为1, 返回叶子节点
    if (postorder.length == 1) {
        return root
    }
    // 4. 寻找切割点
    let index = 0
    for (let i = 0; i < inorder.length; i++) {
        if (inorder[i] == root.val) {
            index = i
            break
        }
    }
    // console.log(index)
    // 5. 切割中序数组，得到 中序左数组和中序右数组
    let leftinorder = inorder.slice(0, index)
    let rightinorder = inorder.slice(index+1, inorder.length)
    // console.log(leftinorder)
    // console.log(rightinorder)
    // 6. 切割后序数组，得到 后序左数组和后序右数组
    let leftpostorder = postorder.slice(0, leftinorder.length)
    let rightpostorder = postorder.slice(leftinorder.length, leftinorder.length + rightinorder.length)
    // console.log(leftpostorder)
    // console.log(rightpostorder)
    // 7. 递归操作
    root.left = buildTree(leftinorder, leftpostorder)
    root.right = buildTree(rightinorder, rightpostorder)
    // 8. 带返回值
    return root
};
// 测试
inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
console.log(buildTree(inorder, postorder))