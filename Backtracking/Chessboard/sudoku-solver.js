// https://leetcode.cn/problems/sudoku-solver/
// idea: https://programmercarl.com/0037.%E8%A7%A3%E6%95%B0%E7%8B%AC.html#%E6%80%9D%E8%B7%AF
// idea: N皇后问题是因为每一行每一列只放一个皇后，只需要一层for循环遍历一行，递归来来遍历列，然后一行一列确定皇后的唯一位置。
// idea: 本题就不一样了，本题中棋盘的每一个位置都要放一个数字（而N皇后是一行只放一个皇后），并检查数字是否合法，解数独的树形结构要比N皇后更宽更深
// point1: 因为解数独找到一个符合的条件（就在树的叶子节点上）立刻就返回，相当于找从根节点到叶子节点一条唯一路径，所以需要使用bool返回值。
// point2: 本题递归不用终止条件，解数独是要遍历整个树形结构寻找可能的叶子节点就立刻返回，递归的下一层的棋盘一定比上一层的棋盘多一个数，等数填满了棋盘自然就终止（填满当然好了，说明找到结果了），所以不需要终止条件！
// point3: 永远填不满的情况:注意这里return false的地方，这里放return false 是有讲究的。因为如果一行一列确定下来了，这里尝试了9个数都不行，说明这个棋盘找不到解决数独问题的解！那么会直接返回， 这也就是为什么没有终止条件也不会永远填不满棋盘而无限递归下去！
// point4：核心操作：point3, 剪枝操作
var solveSudoku = function(board) {
    // 判断棋盘是否合法
    var isvaild = function(row, column, k, board){
        for(let i = 0; i < board.length; i++){ // 注：i从0开始，遍历整行
            if(board[row][i] == k){
                return false
            }
        }
        for(let j = 0; j < board[0].length; j++){ // 注： j从0开始，遍历整列
            if(board[j][column] == k){
                return false
            }
        }
        for(let i = Math.floor(row/3)*3; i < Math.floor(row/3)*3+3; i++){ // 遍历整个九宫格
            for(let j = Math.floor(column/3)*3; j < Math.floor(column/3)*3+3; j++){   
                if(board[i][j] == k){
                    return false
                }
            }
        }
        return true
    }
    var backtracking = function(board){
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[0].length; j++){ // 使用两个for循环
                if(board[i][j] != '.'){
                    continue
                }
                for(let k = 1; k <= 9; k++){
                    if(!isvaild(i, j, k, board)){ 
                        continue
                    }
                    board[i][j] = k.toString()
                    if(backtracking(board)){ // 如果找到合适一组立刻返回
                        return true
                    }
                    board[i][j] = '.'                
                }
                return false // 因为如果一行一列确定下来了，这里尝试了9个数都不行，说明这个棋盘找不到解决数独问题的解！
                //核心理解：剪枝操作，向上回溯 
            }
        }
        return true
    }
    backtracking(board)
    return board
};