var addBinary = function(num1, num2) {
    let res = ''
    let i1 = num1.length - 1
    let i2 = num2.length - 1
    let carry = 0
    while (i1 >= 0 || i2 >= 0) {
        const x = i1 >= 0 ? num1[i1] - '0' : 0
        const y = i2 >= 0 ? num2[i2] - '0' : 0
        const sum = x + y + carry
        res += (sum % 2)
        carry = Math.floor(sum / 2)
        i1--
        i2--
    }
    if (carry) res += carry
    return res.split("").reverse().join("")
}

// 时间复杂度：O(n)，这里的时间复杂度来源于顺序遍历 a 和 b。n为num1,num2中较长的
// 空间复杂度：O(1)，除去答案所占用的空间，这里使用了常数个临时变量。