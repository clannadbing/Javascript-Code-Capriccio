// https://leetcode.cn/problems/minimum-time-to-visit-a-cell-in-a-grid/
function Queue(){
    // 属性
    this.items = []
    // 方法
    // enqueue(data): 向队列尾部添加一个新的项
    Queue.prototype.enqueue = function(data){
        this.items.push(data)
    }
    // dequeue(): 移除队列中的第一项, 并返回被移除的元素
    Queue.prototype.dequeue = function(){
        return this.items.shift()
    }
    // front(): 返回队列中第一个元素, 队列不做任何变动
    Queue.prototype.front = function(){
        return this.items[0]
    }
    // isEmpty(): 如果队列没有任何元素就返回true, 否则返回false
    Queue.prototype.isEmpty = function(){
        return this.items.length == 0
    }
    // size(): 返回队列的元素个数
    Queue.prototype.size = function(){
        return this.items.length
    }
    // toString(): 将队列结构的内容以字符形式返回
    Queue.prototype.toString = function(){
        var str = ''
        for(var i = 0; i < this.items.length; i++){
            str += this.items[i] +' ' 
        }
        return str
    }
}

var minimumTime = function(grid) {
    let dis = [[-1,0],[0,-1],[1,0],[0,1]]
    let check = function(mid) {
        let visit = new Array(grid.length)
        for (let i = 0; i < grid.length; i++) {
            visit[i] = new Array(grid[0].length).fill(0)
        }
        let t = mid
        let queue = new Queue()
        queue.enqueue([m-1, n-1])
        visit[m-1][n-1] = 1
        while (!queue.isEmpty()) {
            let [x, y] = queue.dequeue()
            for (let i = 0; i < dis.length; i++) {
                let next_x = x + dis[i][0]
                let next_y = y + dis[i][1]
                if (next_x >= 0 && next_x < m && next_y >= 0 && next_y < n && visit[next_x][next_y] != 1 && t >= grid[next_x][next_y]) {
                    if (next_x == 0 && next_y == 0) {
                        return true
                    }
                    visit[next_x][next_y] = 1
                    queue.enqueue([next_x, next_y])
                }
            }
            t--
        }
        return false
    }
    if (grid[0][1] > 1 && grid[1][0] > 1) {
        return -1
    }
    let m = grid.length
    let n = grid[0].length
    let left = Math.max(m+n-2, grid[m-1][n-1])
    let right = 1e5 + m + n - 2
    while (left <= right) {
        let mid = Math.floor((left +right)/2)
        if (check(mid)) {
            right = mid - 1
        }
        else {
            left = mid + 1
        }
    }
    return (left % 2) == (m+n-2) % 2 ? left : left+1  
};