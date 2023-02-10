// https://leetcode.cn/problems/reconstruct-itinerary/submissions/
// idea: https://programmercarl.com/0332.%E9%87%8D%E6%96%B0%E5%AE%89%E6%8E%92%E8%A1%8C%E7%A8%8B.html#%E6%80%9D%E8%B7%AF
// point1: 如何记录映射关系采用{}(对象--obj)、还是map(哈希表) ==> 区别：{} ->无序 map ->有序 以及两者在对键值对操作的区别
// point1.1: 判断是否有某个属性: map.has(key) vs obj.hasOwnProperty(key)
// point1.2: 获取key对应的value: map.get(key) vs obj[key] or obj.key
// point1.3: 删除key-value键值对：map.delete(key) vs delete obj[key] or delete obj.key
// point1.4: 设置key-value键值对：map.set(key, value) vs obj[key] = value or obj.key = value
// point2: 区分forEach、for...in、for...of
// point2.1: for...in : for...in用于迭代对象的所有可枚举属性，包括继承的可枚举属性。此迭代语句可以与数组字符串或普通对象一起使用，但不能与Map 或 Set对象一起使用。
// point2.2: for...of : for...of用于迭代可迭代对象，迭代它们的值而不是它们的属性。此迭代语句可用于数组、字符串、Map(得到的是键值对)或Set对象，但不能用于普通对象
// point2.3: forEach()是Array原型的一个方法，它允许您遍历数组的元素(map也可：map用数组实现)。虽然forEach()只迭代数组，但它可以在迭代时访问每个元素的值和索引。Array.forEach(function(value, index){})、Map.forEach(function(value, key){})
// point3: 数组.sort() ==> 默认排序顺序是根据字符串UniCode码
// point4: 回溯的单层循环递归环节中,注意执行相关操作是否会对后续操作造成错误结果，即顺序的重要性
// point5: 该题做法本质是类比letter-combinations-of-a-phone-number做法
// point6: 和之前题目不同, 这里寻找的是一条可行路径，不是全部路径, 注意模板的变化
var findItinerary = function(tickets) {
    let res = ['JFK'] // 核心技巧 -> 将开始点设置为res初始值
    let map = {}
    for(let i of tickets){  // for...of
        if(!map.hasOwnProperty(i[0])){
            map[i[0]] = []
        }
        map[i[0]].push(i[1])
    }
    for(let i in map){ // for...in
        map[i].sort() // 数组.sort()
    }
    var backtracking = function(tickets, startindex){ //startindex -> 指代递归的次数
        if(startindex == tickets.length){
            return true
        }
        if(!map[res[res.length-1]]){
            return false
        }
        for(let i = 0; i < map[res[res.length-1]].length; i++){
            let city = map[res[res.length-1]][i]
            //易错点：这里1、2不能交换顺序, 2对1会产生错误的结果
            map[res[res.length-1]].splice(i,1) // 1
            res.push(city) // 2
            if(backtracking(tickets, startindex + 1)){
                return true
            }
            res.pop()
            map[res[res.length-1]].splice(i,0,city)
        }
    }
    backtracking(tickets, 0)
    return res
};