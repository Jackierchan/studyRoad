//reduce
const pipe = function(){
    const args = [].slice.apply(arguments);
    return function(x) {
    return args.reduce((res, cb) => cb(res), x);
    }
}
    
// 参数顺序改成从左往右
let calculate = pipe(add, multiply);
let res = calculate(10);
console.log(res); // 结果仍是200

//es6
const pipe = (...args) => x => args.reduce((res, cb) => cb(res), x)


//递归
function pipe(...fns) {
    const length = fns.length;
    const curr = 0;
    return function exe(...args) {
      let result = fns[curr].apply(this, args)
      if (curr >= length) {
        return result
      } else {
        curr++;
        return exe.call(this, result)
      }
    }
  }