point1: 替换系列
核心关键点：其实很多数组填充类的问题，都可以先预先给数组扩容带填充后的大小，然后在从后向前进行操作.
point1.1: ti-huan-kong-ge-lcof(数组填充+双指针法)

point2: 反转系列
核心关键点：
一、当需要固定规律一段一段去处理字符串的时候, 要想想在在for循环的表达式上做做文章
二、先整体反转再局部反转
三、先局部反转再整体反转
point2.1: reverse-string(双指针法)
point2.2: reverse-string-ii(当需要固定规律一段一段去处理字符串的时候, 要想想在在for循环的表达式上做做文章)
point2.3: reverse-words-in-a-string(一、快慢指针去除空格 二、先整体反转再局部反转)
point2.4: zuo-xuan-zhuan-zi-fu-chuan-lcof(先局部反转再整体反转)

point3: KMP
核心关键点: 
一、求next数组的时候就是在用kmp,把[0,j]的前缀看成是模式串，把[1,i]的后缀看成是文本串.1、文本串一直是每次循环+1,不会回退 2、模式串有时候可以通过next数组跳过前面几个字符直接比较,这两点就是kmp高效的地方
二、i:表示后缀数组的末尾, j:表示前缀数组的末尾+最长公共前后缀长度
三、求next数组的步骤: 1、初始化 2、前后缀相同情况 3、前后缀不同情况(回退)
四、模式串与文本串再次匹配继续重复步骤三
point3.1: find-the-index-of-the-first-occurrence-in-a-string
point3.2: repeated-substring-pattern(使用kmp求最小重复子串的方法)
