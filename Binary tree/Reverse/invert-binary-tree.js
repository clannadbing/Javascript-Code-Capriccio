// https://leetcode.cn/problems/invert-binary-tree/
// idea: https://programmercarl.com/0226.%E7%BF%BB%E8%BD%AC%E4%BA%8C%E5%8F%89%E6%A0%91.html#%E9%80%92%E5%BD%92%E6%B3%95

// 1. 先序遍历
var invertTree = function(root) {
    var DFS = function(curr) {
        if(!curr) {
            return curr
        }
        let temp = curr.left
        curr.left = curr.right
        curr.right = temp
        DFS(curr.left)
        DFS(curr.right)
    }
    DFS(root)
    return root
};

// 2. 中序遍历
var invertTree = function(root) {
    var DFS = function(curr) {
        if(!curr) {
            return curr
        }
        DFS(curr.left)
        let temp = curr.left
        curr.left = curr.right
        curr.right = temp
        DFS(curr.left)
    }
    DFS(root)
    return root
};

// 3. 迭代
function Stack(){
    // 属性
    this.items = []
    // 方法
    // push(data): 添加一个新元素到栈顶位置
    Stack.prototype.push = function(data){
        this.items.push(data)
    }
    // pop(): 移除栈顶的元素，同时返回被移除的元素
    Stack.prototype.pop = function(){
        return this.items.pop()
    } 
    // peek(): 返回栈顶的元素，不对栈做任何修改(这个方法不会移除栈顶的元素，仅仅返回它)
    Stack.prototype.peek = function(){
        return this.items[this.items.length - 1]
    }
    // isEmpty(): 如果栈里没有任何元素就返回true, 否则返回false
    Stack.prototype.isEmpty = function(){
        return this.items.length == 0
    }
    // size(): 返回栈里的元素个数
    Stack.prototype.size = function(){
        return this.items.length
    }
    // toString(): 将栈结构的内容以字符形式返回
    Stack.prototype.toString = function(){
        var str = ''
        for(var i = 0; i < this.items.length; i++){
            str += this.items[i] +' ' 
        }
        return str
    }
}

var invertTree = function(root) {
    let stack = new Stack()
    if(!root) {
        return root
    }
    stack.push(root)
    while(!stack.isEmpty()) {
        let node = stack.pop()
        let temp = node.left
        node.left = node.right
        node.right = temp
        if(node.right) {
            stack.push(node.right)
        }
        if(node.left) {
            stack.push(node.left)
        }
    }
    return root
};

// 4.层序遍历
var invertTree = function(root) {
    let queue = new Queue()
    if (!root) {
        return root
    }
    queue.enqueue(root)
    while (!queue.isEmpty()) {
        let size = queue.size()
        while (size--) {
            let node = queue.dequeue()
            let temp = node.left
            node.left = node.right
            node.right = temp
            if(node.left) {
                queue.enqueue(node.left)
            } 
            if(node.right) {
                queue.enqueue(node.right)
            }
        }
    }
    return root
};