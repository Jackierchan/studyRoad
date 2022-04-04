function debounce(fn, delay) {
    var timer; // 维护一个 timer
    return function () {
    var _this = this; // 取debounce执行作用域的this
    var args = arguments;
    if (timer) {
    clearTimeout(timer);
    }
    timer = setTimeout(function () {
    fn.apply(_this, args); // 用apply指向调用debounce的对象，相当于_this.fn(args);
    }, delay);
    };
    }
    //一般可以使用在用户输入停止一段时间过后再去获取数据，而不是每次输入都去获取