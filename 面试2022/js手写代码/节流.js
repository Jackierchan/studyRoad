//定时器写法
function throttle(fn, delay) {
    var timer;
    return function () {
    var _this = this;
    var args = arguments;
    if (timer) {
    return;
    }
    timer = setTimeout(function () {
    fn.apply(_this, args);
    timer = null; // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
    }, delay)
    }
    }

//时间戳写法
    function throttle(fn, delay) {
        var previous = 0;
        // 使用闭包返回一个函数并且用到闭包函数外面的变量previous
        return function() {
            var _this = this;
            var args = arguments;
            var now = new Date();
            if(now - previous > delay) {
                fn.apply(_this, args);
                previous = now;
            }
        }
    }
    //懒加载时要监听计算滚动条的位置，但不必每次滑动都触发，可以降低计算的频率，而不必去浪费资源
