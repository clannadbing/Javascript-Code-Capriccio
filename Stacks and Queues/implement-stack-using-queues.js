// https://leetcode.cn/problems/implement-stack-using-queues/
// idea: https://programmercarl.com/0225.%E7%94%A8%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E6%A0%88.html
function Queue(){
    // 属性
    this.items = []
    // 方法
    // enqueue(data): 向队列尾部添加一个新的项
    Queue.prototype.enqueue = function(data){
        this.items.push(data)
    }
    // dequeue(): 移除队列中的第一项, 并返回被移除的元素
    Queue.prototype.dequeue = function(){
        return this.items.shift()
    }
    // front(): 返回队列中第一个元素, 队列不做任何变动
    Queue.prototype.front = function(){
        return this.items[0]
    }
    // isEmpty(): 如果栈里没有任何元素就返回true, 否则返回false
    Queue.prototype.isEmpty = function(){
        return this.items.length == 0
    }
    // size(): 返回栈里的元素个数
    Queue.prototype.size = function(){
        return this.items.length
    }
    // toString(): 将栈结构的内容以字符形式返回
    Queue.prototype.toString = function(){
        var str = ''
        for(var i = 0; i < this.items.length; i++){
            str += this.items[i] +' ' 
        }
        return str
    }
}
var queue1 = new Queue()
var queue2 = new Queue()
var MyStack = function() {

};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    queue1.enqueue(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while(queue1.size() > 1) {
        queue2.enqueue(queue1.dequeue())
    }
    let temp = queue1.dequeue()
    while(queue2.size() > 0) {
        queue1.enqueue(queue2.dequeue())
    }
    return temp
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    while(queue1.size() > 1) {
        queue2.enqueue(queue1.dequeue())
    }
    let temp = queue1.front()
    return temp
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return queue1.isEmpty() && queue2.isEmpty()
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */