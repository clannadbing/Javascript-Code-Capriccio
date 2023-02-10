// https://leetcode.cn/problems/happy-number/
var isHappy = function(n) {
    let map = new Map()
    let res = 0
    while(res != 1){
        res = 0
        if(!map.has(n)){
            map.set(n, 1)
        }
        else{
            return false
        }
        while(n != 0){
            let temp = n % 10
            res = temp*temp + res
            n = Math.floor(n / 10)
            console.log(temp)
        }
        n = res 
    }
    return true
};