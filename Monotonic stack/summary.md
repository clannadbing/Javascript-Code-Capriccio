## 常见的单调栈求解的题目
1. 求一个数左边/右边 大于/小于自己的第一个数(point1)
2. 求一段连续子数组/区间以区间中某个数某个属性为界限的总和/长度，比如求以arr[i]为最小值能够覆盖的所有区间的和(point2、point3)

### point1: 栈顶到栈底以数组值单调递减顺序（栈内存放数组值）、倒序入栈
point1.1: daily-temperatures(根据数值值获取对应索引)  
point1.2: next-greater-element-i  
point1.3: next-greater-element-ii(数组扩倍)  

### point2: 栈顶到栈底以数组值单调递减顺序（栈内存放数组索引）、正序入栈
point2.1: trapping-rain-water

### point3: 栈顶到栈底以数组值单调递增顺序（栈内存放数组索引）、正序入栈
point3.1: largest-rectangle-in-histogram(三种情况:分类讨论、数组扩充)