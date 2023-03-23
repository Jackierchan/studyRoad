var mod = require('./lib');
console.log(mod.counter);  // 3
mod.incCounter();
console.log(mod.counter); // 3
console.log(mod.obj);  // 3
mod.incAge();
console.log(mod.obj);  // 3
