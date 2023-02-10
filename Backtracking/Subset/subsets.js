// https://leetcode.cn/problems/subsets/
// idea: 获取树形结构的所有节点, 要清楚子集问题和组合问题、分割问题的的区别, 子集是收集树形结构中树的所有节点的结果. 而组合问题、分割问题是收集树形结构中叶子节点的结果.
var subsets = function(nums) {
    let res = []
    let path = []
    var backtracking = function(nums, startindex){
        res.push(path.slice()) // 获取树形结构的所有节点：包括两个部分：本身为空和树形结构的所有节点
        if(startindex >= nums.length){
            return
        }
        for(let i = startindex; i < nums.length; i++){
            path.push(nums[i])
            backtracking(nums, i+1)
            path.pop()
        }
    }
    backtracking(nums, 0)
    return res
};