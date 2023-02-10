// https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
// idea: https://programmercarl.com/%E5%89%91%E6%8C%87Offer58-II.%E5%B7%A6%E6%97%8B%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2.html
var reverseLeftWords = function(s, n) {
    s = s.split('')
    str = s.slice(0, n)
    let left = 0
    for(let right = n; right < s.length; right++) {
        s[left] = s[right]
        left++
    }
    for(let j = 0; j < str.length; j++) {
        s[left] = str[j]
        left++
    }
    s = s.join('') 
    return s
};