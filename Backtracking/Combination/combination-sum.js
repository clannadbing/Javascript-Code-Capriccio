// https://leetcode.cn/problems/combination-sum/
var combinationSum = function(candidates, target) {
    //确定递归函数的输入参数和返回值
    var res = []
    var path = []
    var backtracking = function(candidates, target, sum, indexstart){
        //递归终止条件
        if(sum > target){
            return
        }
        if(sum == target){
            res.push(path.slice())
            return
        }
        //单层循环递归
        for(var i = indexstart; i < candidates.length ; i++){
            path.push(candidates[i])
            sum = sum + candidates[i]
            backtracking(candidates, target, sum, i)
            sum = sum - candidates[i]
            path.pop()
        }
    }
    backtracking(candidates, target, 0, 0)
    return res
};