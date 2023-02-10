// https://leetcode.cn/problems/spiral-matrix-ii/
// idea: https://programmercarl.com/0059.%E8%9E%BA%E6%97%8B%E7%9F%A9%E9%98%B5II.html#%E6%80%9D%E8%B7%AF
// point: 模拟顺时针画矩阵的过程:填充上行从左到右、填充右列从上到下、填充下行从右到左、填充左列从下到上
// point: 可以发现这里的边界条件非常多，在一个循环中，如此多的边界条件，如果不按照固定规则来遍历，那就是一进循环深似海，从此offer是路人。
// point: 这里一圈下来，我们要画每四条边，这四条边怎么画，每画一条边都要坚持一致的左闭右开，或者左开右闭的原则，这样这一圈才能按照统一的规则画下来。
// point: 根据左闭右开原则，得到sprial-matrix-ii.png, 这里每一种颜色，代表一条边，我们遍历的长度，可以看出每一个拐角处的处理规则，拐角处让给新的一条边来继续画。
// point: 这也是坚持了每条边左闭右开的原则。

var generateMatrix = function(n) {
    // 创建一个n*n的二维数组
    let arr = new Array(n)
    for(let i = 0; i < arr.length; i++){
        arr[i] = []
    }
    let startx = 0     // 每次循环的起始位置
    let starty = 0     // 每次循环的起始位置
    let loop = Math.floor(n / 2)   // 循环的圈数
    let mid = Math.floor(n / 2)    // 当n为奇数时，中间的位置
    let count = 1      // 计数器
    let offset = 1     // 每次循环的偏移量
    let i, j           // 循序变量所在位置
    while(loop-- > 0){
        i = startx
        j = starty
        // 上：从左到右-->左闭右开
        for(j = starty; j < n - offset; j++){
            arr[i][j] = count++
        }
        // 右：从上到下-->上闭下开
        for(i = startx; i < n - offset; i++){
            arr[i][j] = count++
        }
        // 下：从右向左-->右闭左开
        for(; j > starty; j--){
            arr[i][j] = count++
        }
        // 左：从下向上-->下闭上开
        for(; i > startx; i--){
            arr[i][j] = count++
        }
        startx++    // 更新循环的起始位置
        starty++    // 更新循环的起始位置
        offset++    // 更新循环的偏移量
    }
    if(n % 2 == 1){
        arr[mid][mid] = count
    }
    return arr
};