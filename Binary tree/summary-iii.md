### 构造二叉树
##### 以中序和后序遍历构造二叉树来看一下一共分几步：
1. 如果数组大小为零的话，说明是空节点了。
2. 如果不为空，那么取后序数组最后一个元素作为节点元素。
3. 找到后序数组最后一个元素在中序数组的位置，作为切割点
4. 切割中序数组，切成中序左数组和中序右数组 （顺序别搞反了，一定是先切中序数组）
5. 切割后序数组，切成后序左数组和后序右数组
6. 递归处理左区间和右区间
```
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