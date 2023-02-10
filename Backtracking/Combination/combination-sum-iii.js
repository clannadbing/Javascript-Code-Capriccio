// https://leetcode.cn/problems/combination-sum-iii/
var combinationSum3 = function(k, n) {
    const Number = 9
    let res = []
    let path = []
    var backtracking = function(k, n, sum, startindex){
        if(k == 0){
            if(sum == n){
                res.push(path.slice())
            }
            return
        }
        for(let i = startindex; i <= Number; i++){
            path.push(i)
            sum = sum + i
            k = k - 1
            backtracking(k, n, sum, i+1)
            k = k + 1
            sum = sum - i
            path.pop()
        }
    }
    backtracking(k, n , 0, 1)
    return res
};