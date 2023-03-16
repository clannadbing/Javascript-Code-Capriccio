// https://leetcode.cn/problems/split-with-minimum-sum/
var splitNum = function(num) {
    num = num.toString()
    num = num.split('').sort()
    // console.log(num)
    let num1 = []
    let num2 = []
    for (i = 0; i < num.length; i = i+2) {
        num1.push(num[i])
    }
    for (i = 1; i < num.length; i = i+2) {
        num2.push(num[i])
    }
    num1 = Number(num1.join(''))
    num2 = Number(num2.join(''))
    let res = num1 + num2
    return res
};