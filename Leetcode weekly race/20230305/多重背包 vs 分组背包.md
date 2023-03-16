# <center>多重背包 vs 分组背包

[2585. 获得分数的方法数](https://leetcode.cn/problems/number-of-ways-to-earn-points/)

### <font color = "green">前置知识</font>

* [多重背包](https://www.acwing.com/problem/content/description/4/)

  多重背包是**每件物品**最多选择s个,可以选1,2,3,...

  对于多重背包,枚举物品,然后体积(一维倒序)之后决策,选择k个

  ```c++
  #include<iostream>
  #include<algorithm>
  using namespace std;
  const int N=110;
  int f[N];
  int main()
  {
      int n,m;
      cin>>n>>m;
      for(int i=1;i<=n;i++)
      {
          int w,v,s;
          cin>>w>>v>>s;
          for(int j = m;j>=w;j--)
          {
              for(int k =0;k<=s;k++)
              if(j>=k*w)
              f[j] =max(f[j],f[j-k*w] + k*v);
          }
      }
      cout<<f[m];
  }
  ```

* [分组背包](https://www.acwing.com/problem/content/9/)

  分组背包是**每组有多个**,但是这一组最多选择一个

  对于分组背包,物品,体积(倒序),决策,选择1,2,3,4...第k个

  ```c++
  #include<iostream>
  #include<algorithm>
  using namespace std;
  const int N =110;
  int f[N],w[N],v[N];
  int main()
  {
      int n,m;
      cin>>n>>m;
      for(int i=1;i<=n;i++)
      {
          int t;
          cin>>t;
          for(int j=1;j<=t;j++)
          {
              cin>>w[j]>>v[j];
          }
          for(int j=m;j>=0;j--)
          {
              for(int k=1;k<=t;k++)
              if(j>=w[k])
              f[j] =max(f[j],f[j-w[k]] + v[k]);
          }
      }
      cout<<f[m];
  }
  ```

### <font color = "green">解题思路</font>

定义 $f[i][j]$ 表示用前 $i$ 种题目恰好组成 $j$ 分的方案数。

对于第 $i$ 种题目，枚举做 $k$ 道题目，则子问题为[前 $i-1$ 种题目恰好组成 $j - k \cdot mar{k_i}$ 分的方案数]，因此有 $f[i][j] = \sum\limits_{k = 0} {f[i - 1][j - k \cdot mar{k_i}]} $ ，注意 $k$ 不能超过 $coun{t_i}$ ，且 $j - k \cdot coun{t_i} \ge 0$

### <font color = "green">递归实现</font>

```c++
class Solution {
    vector<vector<int>> arr = vector<vector<int>>(51, vector<int>(1001));
public:
    int dfs(int i, int j, vector<vector<int>> types) {
        if (i < 0) {
            if (j == 0) {
                return 1;
            }
            else{
                return 0;
            }
        }
        if (arr[i][j] != 0) {
            return arr[i][j];
        } 
        int res = 0;
        int k = types[i][0];
        int mask = types[i][1];
        for (int t = 0; t <= min(k, j / mask); t++) {
            res += dfs(i-1, j-t*mask, types);
        }
        arr[i][j] = res;
        return res;
    }
    int waysToReachTarget(int target, vector<vector<int>>& types) {
        int n = types.size();
        return dfs(n-1, target, types);
    }
};
```

### <font color = "green">记忆化搜索实现</font>

```c++
class Solution {
    vector<vector<int>> arr = vector<vector<int>>(51, vector<int>(1001, -1));
    const int MOD = 1e9 + 7;
public:
    int dfs(int i, int j, vector<vector<int>> &types) {
        if (i < 0) {
            if (j == 0) {
                return 1;
            }
            else{
                return 0;
            }
        }
        if (arr[i][j] != -1) {
            return arr[i][j];
        } 
        int res = 0;
        int k = types[i][0];
        int mask = types[i][1];
        for (int t = 0; t <= min(k, j / mask); t++) {
            res = res % MOD + dfs(i-1, j-t*mask, types) % MOD;
        }
        arr[i][j] = res % MOD;
        return res % MOD;
    }
    int waysToReachTarget(int target, vector<vector<int>>& types) {
        int n = types.size();
        return dfs(n-1, target, types);
    }
};
```

### <font color = "green">动态规划实现</font>

```c++
class Solution {
    const int MOD = 1e9+7;
public:
    int waysToReachTarget(int target, vector<vector<int>>& types) {
        // int n = types.size();
        // int dp[n+1][target+1];
        // for (int i = 0; i < n + 1; i++) {
        //     memset(dp[i], 0, sizeof(dp[i]));
        // }
        vector<vector<int>> dp = vector<vector<int>> (types.size()+1, vector<int>(target+1, 0));
        dp[0][0] = 1;
        for (int i = 1; i <= n; i++) {
            for (int j = 0; j <= target; j++) {
                int res = 0;
                for (int t = 0; t <= min(types[i-1][0], j / types[i-1][1]); t++) {
                    res = res % MOD + dp[i-1][j-t*types[i-1][1]] % MOD;
                }
                dp[i][j] = res % MOD;
            }
        }
        return dp[n][target];
    }
};
```

