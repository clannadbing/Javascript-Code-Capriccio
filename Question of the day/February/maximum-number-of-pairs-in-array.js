// https://leetcode.cn/problems/maximum-number-of-pairs-in-array
// 滑动窗口
var numberOfPairs = function(nums) {
    nums = nums.sort(function(a, b){return a-b})
    let left = 0
    let res = 0
    let temp = 0
    for (let right = 0; right < nums.length; right++) {
        if (nums[left] == nums[right]) {
            temp++
        }
        else {
            res += temp % 2
            left = right
            right-- 
            temp = 0
        }
    }
    res += temp % 2
    return [(nums.length - res) / 2, res] 
};
// 栈
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
var numberOfPairs = function(nums) {
    nums = nums.sort(function(a, b){return a-b})
    var stack = new Stack()
    for (let i = 0; i < nums.length; i++) {
        if (stack.isEmpty() || stack.peek() != nums[i]) {
            stack.push(nums[i])
        }
        else {
            stack.pop()
        }
    }
    let m = stack.size()
    let n = (nums.length - m) / 2
    return [n, m]
};