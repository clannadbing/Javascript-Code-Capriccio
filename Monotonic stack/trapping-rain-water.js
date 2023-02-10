// https://leetcode.cn/problems/trapping-rain-water/
// idea: https://programmercarl.com/0042.%E6%8E%A5%E9%9B%A8%E6%B0%B4.html
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
var trap = function(height) {
    // 方法一：纵向计数-双指针
        // let sum = 0
        // for(let i = 0; i < height.length; i++) {
        //     if(i == 0 || i == height.length-1) {
        //         continue
        //     }
        //     var lheight = height[i]
        //     var rheight = height[i]
        //     for(let l = i - 1; l >= 0; l--) {
        //         lheight = Math.max(lheight, height[l])
        //     }
        //     for(let r = i + 1; r < height.length; r++) {
        //         rheight = Math.max(rheight, height[r])
        //     }
        //     let h = Math.min(lheight, rheight) - height[i]
        //     if(h > 0) {
        //         sum = sum + h
        //     }
        // }
        // return sum
    //方法二：横向计数-单调栈
        let stack = new Stack()
        let sum = 0
        for(let i = 0; i < height.length; i++) {
            while(stack.size() != 0 && height[stack.peek()] < height[i]) {
                let mid = stack.pop()
                if(stack.size() != 0) {
                    let h = Math.min(height[stack.peek()], height[i]) - height[mid]
                    let w = i - stack.peek() - 1
                    sum = sum + h*w
                }
            }
            stack.push(i)
        }
        return sum
};
