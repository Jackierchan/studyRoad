var maxProfit = function(prices) {
    let r = 0
    let min = prices[0]
    for(let i = 0;i<prices.length;i++){
        r=Math.max(r,prices[i]-min)
        min=Math.min(min,prices[i])
    }
    return r
}
console.log(maxProfit([7,1,5,3,6,4]))