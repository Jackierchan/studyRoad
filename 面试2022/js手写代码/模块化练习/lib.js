var counter = 3;
var obj = {age:1}
function incAge() {
    obj.age++;
  }
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
  obj:obj,
  incAge:incAge
};