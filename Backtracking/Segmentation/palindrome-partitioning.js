// https://leetcode.cn/problems/palindrome-partitioning/
// idea: https://programmercarl.com/0131.%E5%88%86%E5%89%B2%E5%9B%9E%E6%96%87%E4%B8%B2.html
// 回溯树状图见:palindrome-partitioning.jpg
var partition = function(s) {
    let res = []
    let path = []
    var backtracking = function(s, startindex){ // startindex的含义：分割线的位置
        // 使用startindex做终止条件,startindex == s.length表示分割线已经划到最后
        if(startindex == s.length){
            res.push(path.slice())
        }
        for(let i = startindex; i < s.length; i++){
            //判断是否是回文子串, 关键点：如何获取分割的回文子串,截取字符串s[startindex,i]的位置
            if(isPalindrome(s.slice(startindex, i+1))){
                path.push(s.slice(startindex, i+1))
            }
            //只要不是回文子串, 直接进入下一次循环
            else{
                continue
            }
            backtracking(s, i+1)
            path.pop()
        }
    }
    //判断是否是回文子串
    var isPalindrome = function(str){
        let start = 0
        for(end = str.length - 1; end > start; end--){
            if(str[end] != str[start]){
                return false
            }
            start++
        }
        return true
    }
    backtracking(s, 0)
    return res
};