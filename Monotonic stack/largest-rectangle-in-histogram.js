// https://leetcode.cn/problems/largest-rectangle-in-histogram/
// idea: https://programmercarl.com/0084.%E6%9F%B1%E7%8A%B6%E5%9B%BE%E4%B8%AD%E6%9C%80%E5%A4%A7%E7%9A%84%E7%9F%A9%E5%BD%A2.html
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
var largestRectangleArea = function(heights) {
    let stack = new Stack()
    heights.unshift(0)
    heights.push(0)
    let res = 0
    for(let i = 0; i < heights.length; i++) {
        if(stack.size() == 0) {
            stack.push(i)
        }
        else {
            if(heights[stack.peek()] < heights[i]) {
                stack.push(i)
            }
            else if(heights[stack.peek()] == heights[i]) {
                stack.pop()
                stack.push(i)
            }
            else {
                while(stack.size() != 0 && heights[stack.peek()] > heights[i]) {
                    let mid = stack.pop()
                        let h = heights[mid]
                        let w = i - stack.peek() - 1
                        res = Math.max(res, h*w)
                }
                stack.push(i)
            }
        }
    }
    return res
};