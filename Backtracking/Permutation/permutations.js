// https://leetcode.cn/problems/permutations/
// idea: https://programmercarl.com/0046.%E5%85%A8%E6%8E%92%E5%88%97.html#%E6%80%9D%E8%B7%AF
// idea: 首先排列是有序的，也就是说 [1,2] 和 [2,1] 是两个集合，这和之前分析的子集以及组合所不同的地方。可以看出元素1在[1,2]中已经使用过了，但是在[2,1]中还要在使用一次1，所以处理排列问题就不用使用startIndex了。
// idea: 每层都是从0开始搜索而不是startIndex
// idea: 需要used数组记录path里都放了哪些元素了
var permute = function(nums) {
    let res = []
    let path = []
    let used = new Array(nums.length)
    var backtracking = function(nums){
        if(path.length == nums.length){
            res.push(path.slice())
        }
        for(let i = 0; i < nums.length; i++){
            if(used[i] == 1){
                continue
            }
            path.push(nums[i])
            used[i] = 1
            backtracking(nums)
            used[i] = 0
            path.pop()
        }
    }
    backtracking(nums)
    return res
};