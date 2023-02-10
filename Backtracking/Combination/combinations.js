// https://leetcode.cn/problems/combinations/
var combine = function(n, k) {
    let res = [] //总的返回值
    let path = [] //每一条可行路径的返回值
    var backtracking  = function(n, k, startindex){ //确定传入的参数
        // 递归终止条件
        if(k == 0){
            res.push(path.slice())
            return
        }
        // 单层递归循环
        for(let i = startindex; i <= n; i++){ //横向循环
            path.push(i) //加入path中
            k = k - 1 //做相应的操作
            backtracking(n, k, i+1) //递归，并确定下一次横向循环的起始位置
            k = k + 1 //对k取消相应操作，回溯
            path.pop() //对path取消相应操作，回溯
        }
    }
    backtracking(n, k, 1) //回溯函数,确定传入的参数
    return res
};