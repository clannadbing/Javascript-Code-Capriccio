// https://leetcode.cn/problems/combination-sum-ii/
// idea : https://programmercarl.com/0040.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8CII.html#%E5%9B%9E%E6%BA%AF%E4%B8%89%E9%83%A8%E6%9B%B2
var combinationSum2 = function(candidates, target) {
    candidates = candidates.sort(function(a, b){return a - b}) //排序
    let res = []
    let path = []
    let used = new Array(candidates.length).fill(0) //定义used数组担任去重重任
    var backtracking = function(candidates, target, sum, startindex){
        if(sum > target){
            return
        }
        if(sum == target){
            res.push(path.slice())
            return
        }
        for(let i = startindex; i < candidates.length; i++){
            // 去重核心，同一树枝不去重，同一树层去重
            if(i > 0 && candidates[i] == candidates[i-1] && used[i-1] == 0){
                continue
            }
            path.push(candidates[i])
            sum = sum + candidates[i]
            used[i] = 1
            backtracking(candidates, target, sum, i+1)
            used[i] = 0
            sum = sum - candidates[i]
            path.pop()
        }
    }
    backtracking(candidates, target, 0, 0)
    return res
};