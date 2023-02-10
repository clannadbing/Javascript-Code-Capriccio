// https://leetcode.cn/problems/minimum-window-substring/
// idea: 滑动窗口
// point1: 如何确定滑动窗口while循环的条件 --> whlie循环中的条件要求滑窗内的字符串涵盖t中的所有字符（种类和数量）？如何实现
// point1: 基于map或者对象的方法实现：key统计字符串的个数, value统计字符串的数量
// point1: 具体实现方式：对t-->基于对象统计, 对s-->设计window滑窗基于对象统计
// point1: 当满足条件：滑窗内某一种类字符的数量 = t中对应种类字符数量; 设立valid变量用于计数
// point1: valid = t中所有属性数量时 --> 即满足滑动窗口while循环的条件, window的left指针开始移动 
// point2: 如何获取最小的覆盖子串 --> 设置两个变量: start --> 统计最小覆盖子串的起始位置 length --> 统计最小覆盖子串的长度
var minWindow = function(s, t) {
    let window = {}
    let str = {}
    let valid = 0
    let start = 0
    let length = Infinity
    let left = 0
    for(let i of t){
        if(str.hasOwnProperty(i)){
            str[i] = str[i] + 1
        }
        else{
            str[i] = 1
        }
    }
    console.log(str)
    for(let right = 0; right < s.length; right++){
        if(str.hasOwnProperty(s[right])){
            if(window.hasOwnProperty(s[right])){
                window[s[right]] = window[s[right]] + 1
            }
            else{
                window[s[right]] = 1
            }
            if(str[s[right]] == window[s[right]]){
                valid++
            }
        }
        while(valid == Object.keys(str).length){
            if(right - left + 1 < length){
                start = left
                length = right - left + 1
            }
            if(str.hasOwnProperty(s[left])){
                if(str[s[left]] == window[s[left]]){
                    valid--
                }
                window[s[left]] = window[s[left]] - 1
            }
            left++
        }
    }
    let res = ''
    if(length != Infinity){
        res = s.slice(start, start+length)
        return res
    }
    return res 
};