var addToArrayForm = function(num, k) {
    let numK = String(k).split('')
    let Alength = num.length-1,Blength=numK.length-1
    let carry = 0,res=''
    while(Alength>=0||Blength>=0){
        let A = Alength>=0?num[Alength] - '0':0
        let B = Blength >=0?numK[Blength] - '0':0
        let sum = A+B+carry
        carry = Math.floor(sum / 10)
        sum = sum%10
        res =res+sum
        Alength--
        Blength--
    }
    if(carry) res = res +carry
    return res.split('').reverse()
};