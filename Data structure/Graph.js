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

// 无向图
function Graph() {
    // 属性：顶点(数组)/边(哈希表)
    this.vertexes = [] // 顶点
    this.edges = new Map() // 边
    // 方法
    // 1. 添加顶点的方法
    Graph.prototype.addVertex = function(v) {
        this.vertexes.push(v)
        this.edges.set(v, [])
    } 
    // 2. 添加边的方法
    Graph.prototype.addEdge = function(v1, v2) {
        this.edges.get(v1).push(v2)
        this.edges.get(v2).push(v1)
    } 
    // 3. 实现toString方法
    Graph.prototype.toString = function() {
        // 1. 定义字符串，保存最终结果
        let resString = ""
        // 2. 遍历所有顶点，以及顶点对应的边
        for (let i = 0; i < this.vertexes.length; i++) {
            resString += this.vertexes[i] + "->"
            let Vedges = this.edges.get(this.vertexes[i])
            for (let i = 0; i < Vedges.length; i++) {
                resString += " " + Vedges[i] 
            }
            resString +=  "\n"
        }
        return resString
    }
    // 4. BFS
    Graph.prototype.bfs = function(vertex, hander) {
        // 1. 初始化顶点颜色
        let color = new Map()
        for (let i = 0; i < this.vertexes.length; i++) {
            color.set(this.vertexes[i], 'white')
        }
        // 2. 将顶点加入队列中
        let queue = new Queue()
        queue.enqueue(vertex)
        // 3. 利用队列的方式实现广度优先搜索
        while (queue.size() != 0) {
            // 3.1 从队列中取出一个顶点
            let v = queue.dequeue()
            // 3.2 获取和顶点相连的其它顶点
            let vedge = this.edges.get(v)
            // 3.3 将v颜色变为灰色
            color.set(v, 'gray')
            // 3.4 遍历和顶点相连的其它顶点
            for (let i = 0; i < vedge.length; i++) {
                if (color.get(vedge[i]) == 'white') {
                    queue.enqueue(vedge[i])
                    color.set(vedge[i], 'gray')
                }
            }
            // 3.5 访问顶点
            hander(v)
            // 3.6 将顶点设置为黑色
            color.set(v, 'black')
        }
    }
    // 5. DFS
    Graph.prototype.dfs = function(vertex, hander) {
        // 1. 初始化顶点颜色
        let color = new Map()
        for (let i = 0; i < this.vertexes.length; i++) {
            color.set(this.vertexes[i], 'white')
        }
        // 2.深度优先搜索遍历各个顶点
        var dfsvertex = function (v, hander) {
            if (v == null) {
                return
            }
            hander(v)
            color.set(v, 'gray')
            let vedge = graph.edges.get(v)
            for (let i = 0; i < vedge.length; i++) {
                if (color.get(vedge[i]) == 'white') {
                    dfsvertex(vedge[i], hander)
                }
            }
        } 
        dfsvertex(vertex, hander)
    }
}
    // 测试代码
    // 1. 创建图结构
    var graph = new Graph()
    // 2. 添加顶点
    var myVertexes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    for (let i = 0; i < myVertexes.length; i++) {
        graph.addVertex(myVertexes[i])
    }
    // 3. 添加边
    graph.addEdge('A', 'B')
    graph.addEdge('A', 'C')
    graph.addEdge('A', 'D')
    graph.addEdge('C', 'D')
    graph.addEdge('C', 'G')
    graph.addEdge('D', 'G')
    graph.addEdge('D', 'H')
    graph.addEdge('B', 'E')
    graph.addEdge('B', 'F')
    graph.addEdge('E', 'I')
    // 4. 测试结果
    console.log(graph.toString())
    // 5. 测试BFS
    // let res = ""
    // graph.bfs(graph.vertexes[0], function(v) {res += v + " "})
    // console.log(res)
    // 6. 测试DFS
    let res = ""
    graph.dfs(graph.vertexes[0], function(v) {res += v + " "})
    console.log(res)