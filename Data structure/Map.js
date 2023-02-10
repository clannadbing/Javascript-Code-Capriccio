// 基于链地址法哈希表封装
var HashTable = function() {
    // 定义属性
    this.storage = []
    this.count = 0
    this.size = 7
    // hash函数的实现
    HashTable.prototype.hashfunc = function(str, size) {
        // 1、定义hashcode变量
        let hashcode = 0
        // 2、霍纳算法，来计算hashcode值 --> 用于降低乘法运算次数
        for(let i = 0; i < str.length; i++) {
            hashcode = hashcode*37 + str.charCodeAt(i)
        }
        // 3、取余操作
        let index = hashcode % size
        return index
    }
    // hash扩容-判断质数
    HashTable.prototype.isPrime = function(num) {
        let temp = Math.floor(Math.sqrt(num))
        for(let i = 2; i <= temp; i++) {
            if(num % i == 0){
                return false
            }
        }
        return true
    }
    // hash扩容-获取质数
    HashTable.prototype.getPrime = function(num) {
        while(!this.isPrime(num)) {
            num++
        }
        return num
    }
    // hash扩容
    HashTable.prototype.resize = function(newsize) {
        // 1、保留旧的数组内容
        let oldstorage = this.storage
        // 2、重置所有的属性
        this.storage = []
        this.count = 0
        this.size = this.getPrime(newsize)
        // 3、遍历oldstorage中所有的bucket
        for(let i = 0; i < oldstorage.length; i++) {
            // 3.1、取出对应的bucket
            let bucket = oldstorage[i]
            // 3.2、判断bucket是否为null
            if(bucket == null) {
                continue
            }
            // 3.3、bucket中有数据, 取出数据, 重新插入
            for(let j = 0; j < bucket.length; j++) {
                let tuple = bucket[j]
                this.set(tuple[0], tuple[1])
            }
        }
    }
    // hash添加&修改元素
    HashTable.prototype.set = function(key, value) {
        // 1、根据key获取对应的index
        let index = this.hashfunc(key, this.size)
        // 2、判断hash表中是否存在该索引对应的hash桶、不存在则建立
        let bucket = this.storage[index]
        if(bucket == null) {
            bucket = []
            this.storage[index] = bucket //特别注意，这里不能直接对bucket进行操作，这里操作使bucket和this.storage[index]指向同一处位置(即两者存放的地址相同)
        }
        // 3、存在hash桶, 该元素在hash桶中, 修改数据
        for(let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if(tuple[0] == key) {
                tuple[1] = value
                return
            }
        }
        // 4、存在hash桶, 元素不在hash桶中, 插入数据
        bucket.push([key, value])
        this.count++
        // 5、判断是否需要has扩容
        if(this.count > 0.75*this.size) {
            // 扩充容量
            this.resize(2*this.size)
        }
        return 
    }
    // hash获取元素
    HashTable.prototype.get = function(key) {
        // 1、根据key获取对应的index
        let index = this.hashfunc(key, this.size)
        // 2、判断该索引对应的hash桶是否存在
        let tucket = this.storage[index]
        // 3、hash桶不存在，直接返回空
        if(!tucket) {
            return null
        }
        // 4、hash桶存在，继续搜索
        for(let i = 0; i < tucket.length; i++){
            let tuple = tucket[i]
            if(tuple[0] == key) {
                return tuple[1]
            }
        }
        // 5、最后搜索不存在
        return null
    }
    // hash删除元素
    HashTable.prototype.remove = function(key){
        // 1、获取hash化对应的索引
        let index = this.hashfunc(key, this.size)
        // 2、判断索引对应的hash桶是否存在
        let tucket = this.storage[index]
        if(!tucket) {
            return false
        }
        // 3、hash桶内有删除的元素
        for(let i = 0; i < tucket.length; i++){
            let tuple = tucket[i]
            if(tuple[0] == key) {
                tucket.splice(i, 1)
                this.count--
                if(this.count < 0.25*this.size) {
                    // 降低容量
                    this.resize(Math.floor(this.size / 2))
                }
                return true
            }
        }
        // 4、hash桶无删除的元素
        return false
    }
    HashTable.prototype.size = function() {
        return this.count
    }
}
// 测试
var map = new HashTable()
map.set('abc', 1)
map.set('acb', 2)
map.set('bac', 3)
map.set('bca', 4)
map.set('cab', 5)
map.set('cba', 6)
console.log(map)
console.log(map.get('abc'))
map.remove('cba')
map.remove('cab')
console.log(map)