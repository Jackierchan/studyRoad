/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let last
    let result =0
    let flag =1
    if(x<0){
        flag = 0
        x=Math.abs(x)
    }
    while(x!=0){
        last =x%10
        result = result*10+last
        x=Math.floor(x/10)
    }
     if(flag==0){
        result =-result
     } 
    if(-Math.pow(2,31) <= result&&result <=( Math.pow(2,31) - 1)){
        return result
    }else{
        return 0
    }
};
// 时间复杂度：O(log∣x∣)。翻转的次数即 x 十进制的位数。
// 空间复杂度：O(1)