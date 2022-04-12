function promiseAll(promises) {
    return new Promise(function(resolve, reject) {
      if (!isArray(promises)) {
        return reject(new TypeError('arguments must be an array'));
      }
      var resolvedCounter = 0;
      var promiseNum = promises.length;
      var resolvedValues = new Array(promiseNum);
      for (var i = 0; i < promiseNum; i++) {
        (function(i) {
            if(promises[i].then) {
                Promise.resolve(promises[i]).then(function(value) {
                    resolvedCounter++
                    resolvedValues[i] = value
                    if (resolvedCounter == promiseNum) {
                      return resolve(resolvedValues)
                    }
                  }, function(reason) {
                    return reject(reason)
                  })
            } else{
                resolvedValues[i] = promises[i]
            }
            //判断是否传进来的是promise
        })(i)
      }
    })
  }
  



// function PromiseAll(promises) {
//     return new Promise((resolve, reject) => {
//         if (!Array.isArray(promises)) {
//             return reject(new Error('传入的参数必须得是数组格式'))
//         }
//         let res = []
//         let count;
//         promises.forEach((promise, index) => {
//         	// 这里其实需要判断一下, 当前遍历的promise是否是Promise类型, 但是, 这里没有判断, 想想是因为什么原因. 
//             Promise.resolve(promise).then(data => {
//             	// 注意点1: index用来保证按序存储
//                 res[index]  = data
//                 count++
//                 // 注意点2: count用来保证获取到了想要的所有数据
//                 if(count === promises.length) {
//                     resolve(res)
//                 }
//             }, err => {
//             }).catch(err => {
//                 return reject(err)
//             })
//         })
//     })
// }

