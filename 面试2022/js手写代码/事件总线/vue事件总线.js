// main.js
var EventBus = new Vue();

Object.defineProperties(Vue.prototype, {
$bus: {
get: function () {
return EventBus
}
}
})