//reduceright
const compose = function(){
    // 将接收的参数存到一个数组， args == [multiply, add]
    const args = [].slice.apply(arguments);
    return function(x) {
    return args.reduceRight((res, cb) => cb(res), x);
    }
    }
    
// 咱们来验证下这个方法
let calculate = compose(multiply, add);
let res = calculate(10);
console.log(res); // 结果仍是200

//es6
const compose = (...args) => x => args.reduceRight((res, cb) => cb(res), x);

//递归
function compose(...fns) {
    let length = fns.length;
    let currFnIndex = length - 1;
    let result;
    return function exe(...args) {
    result = fns[currFnIndex].apply(this, args)
    if (currFnIndex === 0) {
    return result
    } else {
    currFnIndex--;
    return exe.call(this, result)
    }
    }
    }