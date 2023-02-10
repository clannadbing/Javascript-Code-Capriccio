// https://leetcode.cn/problems/backspace-string-compare/
// idea: https://leetcode.cn/problems/backspace-string-compare/solution/844zhan-mo-ni-yu-kong-jian-geng-you-de-shuang-zhi-/
var backspaceCompare = function(s, t) {
    let snum = 0
    let tnum = 0
    let sindex = s.length - 1
    let tindex = t.length - 1
    while(1){
        while(sindex >= 0){
            if(s[sindex] == '#'){
                snum++
                sindex--
            }
            else if(s[sindex] != '#' && snum > 0){
                snum--
                sindex--
            }
            else{
                break
            }
        }
        while(tindex >= 0){
            if(t[tindex] == '#'){
                tnum++
                tindex--
            }
            else if(t[tindex] != '#' && tnum > 0){
                tnum--
                tindex--
            }
            else{
                break
            }
        }
        if(s[sindex] != t[tindex]){
            return false
        }
        if(sindex == -1 && tindex == -1){
            break
        }
        sindex--
        tindex--
    }
    return true
};