// https://leetcode.cn/problems/reverse-words-in-a-string/
// idea: https://programmercarl.com/0151.%E7%BF%BB%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%87%8C%E7%9A%84%E5%8D%95%E8%AF%8D.html
var reverseWords = function(s) {
    s = s.split('')
    let slow = 0
    // 消除前导和中间空格和尾随空格
    for(let fast = 0; fast < s.length; fast++) {
        if(s[fast] == ' ' && (fast == 0 || s[fast-1] == ' ')) {
            continue
        }
        else {
            s[slow++] = s[fast]
        }
    }
    // 上述未考虑到的一种特殊情况，即单词末尾只有一个空格
    if(s[slow-1] == ' ') {
        slow--
    }
    s = s.slice(0, slow)
    var reverse = function(str, start, end) {
        while(start < end) {
            let temp = str[start]
            str[start] = str[end]
            str[end] = temp
            start++
            end--
        }
        return str
    }
    // 全部单词翻转
    s = reverse(s, 0, s.length - 1)
    let start = 0
    // 空格前单词翻转+最后一个单词翻转
    for(let i = 0; i <= s.length; i++) {
        if(s[i] == ' ' || i == s.length) {
            s = reverse(s, start, i-1)
            start = i + 1
        }
    }
    s = s.join('')
    return s
};