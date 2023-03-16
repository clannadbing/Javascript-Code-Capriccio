// https://leetcode.cn/problems/substring-xor-queries/

// 位运算+库函数
var substringXorQueries = function(s, queries) {
    let res = []
    for (let i = 0; i < queries.length; i++) {
        let val = queries[i][0] ^ queries[i][1]
        val = val.toString(2) // 十进制转二进制
        if (s.indexOf(val, 0) != -1) {
            res.push([s.indexOf(val, 0), s.indexOf(val, 0)+val.length - 1])
        }
        else {
            res.push([-1,-1])
        }
    }
    return res
};
// 位运算+哈希
var substringXorQueries = function(s, queries) {
    let res = []
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '0') {
            if (!map.has(0)) {
                map.set(0,[i,i])
            }
            continue
        }
        for (let j = i; j - i <= 30 && j < s.length; j++) {
            let string = s.slice(i, j+1)
            string = parseInt(string, 2)
            if (!map.has(string)) {
                map.set(string, [i, j])
            }
        }
    }
    for (let i = 0; i < queries.length; i++) {
        let val = queries[i][0] ^ queries[i][1]
        if (map.has(val)) {
            res.push(map.get(val))
        }
        else {
            res.push([-1,-1])
        }
    }
    return res
};