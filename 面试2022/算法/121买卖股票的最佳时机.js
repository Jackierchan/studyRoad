var maxProfit = function(prices) {
    let r = 0
    let min = prices[0]
    for(let i = 0;i<prices.length;i++){
        r=Math.max(r,prices[i]-min) //取最右最大值，差值就是最大利润
        min=Math.min(min,prices[i]) //取最左最小值
    }
    return r
}
console.log(maxProfit([7,1,5,3,6,4]))

//取最左最小值，取最右最大值，，差值就是最大利润