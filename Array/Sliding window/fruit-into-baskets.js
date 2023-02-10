// https://leetcode.cn/problems/fruit-into-baskets/
var totalFruit = function(fruits) {
    let map = new Map()
    let res = 0
    let length = 0
    let start = 0
    for(let end = 0; end < fruits.length; end++){
        if(!map.has(fruits[end])){
            map.set(fruits[end], 1)
        }
        else{
            map.set(fruits[end], map.get(fruits[end])+1)
        }
        length++
        while(map.size > 2){
            if(map.get(fruits[start]) == 1){
                map.delete(fruits[start])
            }
            else{
                map.set(fruits[start], map.get(fruits[start])-1)
            }
            start++
            length--
        }
        res = Math.max(res, length)
    }
    return res
};