// 原型上添加mybind方法
Function.prototype.MyBind = function(context){
    var self = this
    var args = Array.prototype.slice.call(arguments, 1)
     // 类数组转数组
    var temp = function () {}
    // 直接将 fBound.prototype = this.prototype，我们直接修改 fBound.prototype 的时候，
    // 也会直接修改绑定函数的 prototype。这个时候，我们可以通过一个空函数来进行中转
    var fn = function () {
        var newArgs = Array.prototype.slice.call(arguments)
        // 返回函数的arguments,类数组转数组或者使用es6解构赋值
        return self.apply(this instanceof fn ? this : (context || window), args.concat(newArgs) )
        // 如果被new调用，this应该是fn的实例
    }
    // 维护fn的原型
    temp.prototype = self.prototype
    fn.prototype = new temp()
    return fn
}