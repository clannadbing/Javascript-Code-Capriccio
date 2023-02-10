// https://leetcode.cn/problems/evaluate-reverse-polish-notation/
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
var evalRPN = function(tokens) {
    var res = 0
    // 考虑只有一个数的情况
    if(tokens.length == 1) {
        res = tokens[0] - '0'
    }
    var map = new Map()
    map.set('+', 1)
    map.set('-', 1)
    map.set('*', 1)
    map.set('/', 1)
    var stack = new Stack()
    for(let i = 0; i < tokens.length; i++) {
        if(!map.has(tokens[i])) {
            stack.push(tokens[i])
        }
        else {
            if(tokens[i] == '+') {
                let temp1 = stack.pop() - '0'
                let temp2 = stack.pop() - '0'
                res = temp2 + temp1
                stack.push(res)
            }
            else if(tokens[i] == '-') {
                let temp1 = stack.pop() - '0'
                let temp2 = stack.pop() - '0'
                res = temp2 - temp1
                stack.push(res)
            }
            else if(tokens[i] == '*') {
                let temp1 = stack.pop() - '0'
                let temp2 = stack.pop() - '0'
                res = temp2 * temp1
                stack.push(res)
            }
            // 考虑除法为负数的情况
            else if(tokens[i] == '/') {
                let temp1 = stack.pop() - '0'
                let temp2 = stack.pop() - '0'
                if(temp2 / temp1 < 0) {
                    res = 0 - Math.floor(-temp2 / temp1)
                }
                else {
                    res = Math.floor(temp2 / temp1)
                }
                stack.push(res)
            }
        }
    }
    return res
};