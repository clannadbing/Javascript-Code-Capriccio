// https://leetcode.cn/problems/maximum-difference-by-remapping-a-digit/
var minMaxDifference = function(num) {
    let num1 = num.toString()
    let num2 = num.toString()
    num1 = num1.split('')
    num2 = num2.split('')
    let temp1 = 0
    let temp2 = 0
    for (let i = 0; i < num1.length; i++) {
        if (num1[i] != 9) {
            temp1 = num1[i]   
            break
        }
    }
    for (let i = 0; i < num1.length; i++) {
        if (num1[i] == temp1) {
            num1[i] = 9   
        }
    }
    num1 = num1.join('')
    for (let i = 0; i < num2.length; i++) {
        if (num2[i] != 0) {
            temp2 = num2[i]   
            break
        }
    }
    for (let i = 0; i < num2.length; i++) {
        if (num2[i] == temp2) {
            num2[i] = 0  
        }
    }
    num2 = num2.join('')
    return num1 - num2
};