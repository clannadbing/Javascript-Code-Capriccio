point1: 二分查找
题目类型: 查找元素、插入元素
核心关键点: 有序数组
point1.1: binary-search(三个关键点: 区间定义(闭区间 --> left = 0、right = arr.length - 1)、while循环条件(left <= right)、if语句中的赋值语句 --> left = mid + 1 / right = mid - 1)
point1.2: search-insert-position(二分查找+用数据测试位置在哪(一般用left or right表示))
point1.3: find-first-and-last-position-of-element-in-sorted-array(二分查找+区间搜索(找到目标后区间收缩)+用数据测试位置在哪+考虑边界值)
point1.4: sqrtx(二分查找思想+if语句中的表达式更改)
point1.5: valid-perfect-square(二分查找思想+if语句中的表达式更改)

point2: 双指针
题目类型: 移除元素(快慢指针)、有序数组的平方(首尾指针)、比较含退格的字符串(双指针)
point2.1: move-zeroes(快慢指针)
point2.2: remove-duplicates-from-sorted-array(快慢指针)
point2.3: remove-element(快慢指针)
point2.4: squares-of-a-sorted-array(首位指针)
point2.5: backspace-string-compare(双指针)

point3: 滑动窗口
point3.1: minimum-size-subarray-sum(滑动窗口)
point3.2: fruit-into-baskets(滑动窗口+哈希思想)
point3.3: minimum-window-substring(滑动窗口+哈希(用对象来实现)思想-->先数量相等再类型相等+定义变量记录结果)

point4: 模拟
point4.1: spiral-matrix-ii(定义变量得逻辑性(每次循环的起始位置、循环圈数、当n为奇数时,中间的位置、计数器(看情况)、偏移量、元素所在位置)、循环不变量原则-->左闭右开)
point4.2: spiral-matrix(定义变量得逻辑性(每次循环的起始位置、循环圈数、当n为奇数时,中间的位置、计数器(看情况)、偏移量、元素所在位置)、循环不变量原则-->左闭右开)