// https://leetcode.cn/problems/next-greater-element-ii/
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
var nextGreaterElements = function(nums) {
    let length = nums.length
    for(let i = nums.length; i < 2*length; i++) {
        nums[i] = nums[i-length]
    }
    let stack = new Stack()
    let res = new Array(nums.length)
    for(let i = nums.length - 1; i >= 0; i--) {
        while(stack.size() != 0 && stack.peek() <= nums[i]) {
            stack.pop()
        }
        res[i] = stack.size() == 0 ? -1 : stack.peek()
        stack.push(nums[i])
    }
    res = res.splice(0, res.length / 2)
    return res
};