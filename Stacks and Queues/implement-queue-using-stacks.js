// https://leetcode.cn/problems/implement-queue-using-stacks/
// idea: https://programmercarl.com/0232.%E7%94%A8%E6%A0%88%E5%AE%9E%E7%8E%B0%E9%98%9F%E5%88%97.html#%E6%80%9D%E8%B7%AF
// 基于数组方式实现
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
// 定义两个栈
var stack1 = new Stack()
var stack2 = new Stack()

var MyQueue = function() {

};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    stack1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(stack2.isEmpty()) {
        while(!stack1.isEmpty()) {
            stack2.push(stack1.pop())
        }
    }
    return stack2.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(stack2.isEmpty()) {
        while(!stack1.isEmpty()) {
            stack2.push(stack1.pop())
        }
    }
    return stack2.peek()
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return stack1.isEmpty() && stack2.isEmpty()
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */