### 买卖股票系列总结篇
1. 考虑次数的买卖股票系列 --> (状态：0.没有操作、1.第一次买入(仅这里使用没有操作状态, 之后不可能出现没有操作的状态)、2.第一次卖出、3.第二次买入、4.第二次卖出 ...)
    * best-time-to-buy-and-sell-stock(买卖一次)
    * best-time-to-buy-and-sell-stock-iii(买卖不多于两次)
    * best-time-to-buy-and-sell-stock-iv(买卖k次)
2. 不考虑次数(买卖无数次)的买卖股票系列 -->(状态：0.没有操作、1.买入(仅这里使用没有操作状态, 之后不可能出现没有操作的状态)、2.卖出)
    * best-time-to-buy-and-sell-stock-ii
    * best-time-to-buy-and-sell-stock-with-transaction-fee
    * best-time-to-buy-and-sell-stock-with-cooldown(状态：0.没有操作、1.买入(仅这里使用没有操作状态, 之后不可能出现没有操作的状态)、2.卖出(当天)、3.冷冻期、4.卖出(非当天))