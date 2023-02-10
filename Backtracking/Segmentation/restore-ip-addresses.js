// https://leetcode.cn/problems/restore-ip-addresses/
// idea: startindex在分割问题中的含义：每次递归调用时, 分割线的起始位置, 分割线到末尾结束 
var restoreIpAddresses = function(s) {
    // 定义返回值
    let res = []
    let path = []
    var backtracking = function(s, startindex){
        // 终止条件：分割线至于末尾
        if(startindex == s.length){
            // path数组拼接为字符串
            if(path.length == 4){
                let pathstr = '' 
                for(let j = 0; j < path.length; j++){
                    if(j != path.length - 1){
                        pathstr += path[j]+'.'
                    }
                    else{
                        pathstr += path[j]
                    }
                }
                res.push(pathstr)
            }
            return
        }
        for(let i = startindex; i < s.length; i++){
            let str = s.slice(startindex, i+1)
            // 含有前导0, 或者数字大于255的情况分支, 直接跳过
            if(str[0] == 0 && str.length != 1){
                continue
            }
            if(parseInt(str) > 255){
                continue
            }
            path.push(str)
            backtracking(s, i+1)
            path.pop()
        }
    } 
    backtracking(s, 0)
    return res
};