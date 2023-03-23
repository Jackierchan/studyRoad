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

function getStrNum(str) {
  let k = {}
  for (let i = 0; i < str.length; i++) {
    let chars = str.charAt(i)
    if (k[chars]) {
        k[chars]++
    }else{
        k[chars] = 1
    } 
  }
  let max = 0
  let letter = ''
  for(let i in k){
    if(k[i] > max){
        max = k[i]
        letter = i
    }
  }
  return letter + '出现次数最多，为' + max + '次'
}
getStrNum('dfsdfasdfrfervgervfgvgbdafsadfasdfdddd')
// //时间复杂度O(n)
 //空间复杂度o（n）