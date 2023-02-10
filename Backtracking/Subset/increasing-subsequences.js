// https://leetcode.cn/problems/increasing-subsequences/
// idea: https://programmercarl.com/0491.%E9%80%92%E5%A2%9E%E5%AD%90%E5%BA%8F%E5%88%97.html#%E6%80%9D%E8%B7%AF
// idea: 易错点：而本题求自增子序列，是不能对原数组经行排序的，排完序的数组都是自增子序列了。所以不能使用之前的去重逻辑！
// idea: 1、同一父节点下的同层上使用过的元素就不能在使用了 
// idea: 2、对于已经习惯写回溯的同学，看到递归函数上面的set.add(nums[i]);，下面却没有对应的pop之类的操作，应该很不习惯吧，哈哈这也是需要注意的点，set是记录本层元素是否重复使用，新的一层set都会重新定义（清空），所以要知道uset只负责本层！
var findSubsequences = function(nums) {
    let res = []
    let path = []
    var backtracking = function(nums, startindex){
        let set = new Set()
        if(path.length >= 2){
            res.push(path.slice())
        }
        if(startindex >= nums.length){
            return
        }
        for(let i = startindex; i < nums.length; i++){
            // 1、前一个表达式用于判断path是否递增 2、后一个表达式用于同一父节点下的同层元素去重
            if((path.length > 0 && nums[i] < path[path.length-1]) || set.has(nums[i])){
                continue
            }
            set.add(nums[i])
            path.push(nums[i])
            backtracking(nums, i+1)
            path.pop()
        }
    }
    backtracking(nums, 0)
    return res
};