var addBinary = function(a, b) {
    let Alength = a.length-1,Blength=b.length-1
    let carry = 0
    let res=''
    while(Alength>=0||Blength>=0){
        let A = Number(Alength >= 0?a[Alength]:0)
        let B = Number(Blength>=0?b[Blength]:0)
        let sum = A+B+carry
        carry = Math.floor(sum/2)
        sum = sum%2
        res = res+String(sum)
        Alength--
        Blength--
    }
    if(carry) res=res+carry 
    return res.split('').reverse().join('')
};