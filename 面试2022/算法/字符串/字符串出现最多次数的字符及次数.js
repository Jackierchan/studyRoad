function getStrNum(str) {
    let strAry = str.split('')
    let strObj = strAry.reduce((acc, cur) => {
      cur in acc ? acc[cur]++ : acc[cur] = 1
      return acc
    }, {})
    let max = 0
    for (key in strObj) {
      max = strObj[key] > max ? strObj[key] : max
    }
    for (key in strObj) {
      if (max == strObj[key]) return key + '出现次数最多，为' + max + '次'
    }
}