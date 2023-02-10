// https://leetcode.cn/problems/letter-combinations-of-a-phone-number/
// idea: https://programmercarl.com/0017.%E7%94%B5%E8%AF%9D%E5%8F%B7%E7%A0%81%E7%9A%84%E5%AD%97%E6%AF%8D%E7%BB%84%E5%90%88.html
var letterCombinations = function(digits) {
    var res = []
    var path = []
    var map = new Map()
    map.set('2', ['a','b','c'])
    map.set('3', ['d','e','f'])
    map.set('4', ['g','h','i'])
    map.set('5', ['j','k','l'])
    map.set('6', ['m','n','o'])
    map.set('7', ['p','q','r','s'])
    map.set('8', ['t','u','v'])
    map.set('9', ['w','x','y','z'])
    if(digits.length == 0){
        return []
    }
    var backtracking = function(digits, index){
        if(index == digits.length){
            path1 = path.slice()
            path1 = path1.join('')
            res.push(path1)
            return
        }
        var num = map.get(digits[index])
        for(var i = 0; i < num.length; i++){
            path.push(num[i])
            backtracking(digits, index + 1)//在这里使用++index与index++都会报错
            path.pop()
        }
    }
    backtracking(digits, 0)
    return res
};
