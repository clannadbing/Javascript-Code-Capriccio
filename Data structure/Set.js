//基于对象封装集合
var Set = function(){
    //属性
    this.items = {}
    //方法
    // add(value): 向集合添加一个新的项
    Set.prototype.add = function(value){
        if(this.has(value)){
            return false
        }
        this.items[value] = value //这里不能使用this.items.value, 使用了会添加key: value
    }
    // remove(value): 从集合中移除一个值
    Set.prototype.remove = function(value){
        if(!this.has(value)){
            return false
        }
        delete this.items[value]
    }
    // has(value): 如果值在集合中，返回true; 否则返回false
    Set.prototype.has = function(value){
        return this.items.hasOwnProperty(value)
    }
    // clear(): 移除集合中的所有项
    Set.prototype.clear = function(){
        this.items = {}
    }
    // size(): 返回集合所包含的数量
    Set.prototype.size = function(){
        return Object.keys(this.items).length
    }
    // values(): 返回一个包含集合中所有数值的数组
    Set.prototype.values = function(){
        return Object.keys(this.items)
    }
    // union(OtherSet): 集合求并
    Set.prototype.union = function(OtherSet){
        let unionSet = new Set()
        for(let i in this.items){
            if(!unionSet.has(i)){
                unionSet.add(i)
            }
        }
        for(let i in OtherSet.items){
            if(!unionSet.has(i)){
                unionSet.add(i)
            }
        }
        return unionSet
    }
    // intersection(OtherSet): 集合求交集
    Set.prototype.intersection = function(OtherSet){
        let intersectionSet = new Set()
        for(let i in this.items){
            if(OtherSet.has(i)){
                intersectionSet.add(i)
            }
        }
        return intersectionSet
    }
    // difference(OtherSet): 集合求差集
    Set.prototype.difference = function(OtherSet){
        let differenceSet = new Set()
        for(let i in this.items){
            if(!OtherSet.has(i)){
                differenceSet.add(i)
            }
        }
        return differenceSet
    }
    // subset(OtherSet): 判断集合是否是子集
    Set.prototype.subset = function(OtherSet){
        for(let i in this.items){
            if(!OtherSet.has(i)){
                return false
            }
        }
        return true
    }
}
// 测试
var set = new Set()
set.add('aaa')
set.add('bbb')
var otherSet = new Set()
otherSet.add('bbb')
otherSet.add('ccc')
console.log(set.subset(otherSet))
console.log(set.union(otherSet))
console.log(set.intersection(otherSet))
console.log(set.difference(otherSet))



