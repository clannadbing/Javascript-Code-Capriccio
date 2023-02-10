// https://leetcode.cn/problems/n-queens/submissions/
// idea: https://programmercarl.com/0051.N%E7%9A%87%E5%90%8E.html#%E6%80%9D%E8%B7%AF
var solveNQueens = function(n) {
    let arr = new Array(n)
    for(let i = 0; i < n; i++){
        arr[i] = ''
        for(let k = 0; k < n; k++){
            arr[i] += '.'
        }
    }
    //字符串虽然可以像数组那样获取某一位置字符, 但是不能像数组那样直接修改某一位置的字符
    let res = []
    let path = []
    var isvalid = function(path, i, n){
        let left = i
        let right = i
        for(let j = path.length-1; j >= 0; j--){
            if(path[j][i] == 'Q'){
                return false
            }
            if(path[j][left-1] == 'Q' && left > 0){
                return false
            }
            if(path[j][right+1] == 'Q' && right < n-1){
                return false
            }
            left--
            right++
        }
        return true
    }
    var backtracking = function(n, startindex){
        if(startindex == n ){
            res.push(path.slice())
            return
        }
        for(let i = 0; i < n; i++){
            if(startindex > 0 && !isvalid(path, i, n)){
                continue
            }
            let mid = arr[startindex].split('')
            mid[i] = 'Q'
            mid = mid.join('')
            path.push(mid)
            backtracking(n, startindex+1)
            path.pop()
        }
    }
    backtracking(n, 0)
    return res
};
