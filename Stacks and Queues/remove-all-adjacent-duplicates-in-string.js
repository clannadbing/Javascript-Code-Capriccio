// https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/
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
var removeDuplicates = function(s) {
    let str = ''
    var stack = new Stack()
    for(let i = 0; i < s.length; i++) {
        if(stack.isEmpty()) {
            stack.push(s[i])
        }
        else {
            if(stack.peek() == s[i]) {
                stack.pop()
            }
            else {
                stack.push(s[i])
            }
        }
    }
    let temp = stack.size()
    for(let i = 0; i < temp; i++) {
        str = str.concat(stack.pop())
    }
    str = str.split('')
    str = str.reverse()
    str = str.join('')
    return str
};