//实现思路：新建一个数组，遍历去要重的数组，当值不在新数组的时候（indexOf为-1）就加入该新数组中；
var arr=[2,8,5,0,5,2,6,7,2];
function unique1(arr){
  var hash=[];
  for (var i = 0; i < arr.length; i++) {
     if(hash.indexOf(arr[i])==-1){
      hash.push(arr[i]);
     }
  }
  return hash;
}
//includes()同理

//实现思路：如果当前数组的第 i 项在当前数组中第一次出现的位置不是 i，那么表示第 i 项是重复的，忽略掉。否则存入结果数组。
function unique2(arr){
    var hash=[];
    for (var i = 0; i < arr.length; i++) {
       if(arr.indexOf(arr[i])==i){
        hash.push(arr[i]);
       }
    }
    return hash;
  }

  //实现思路：给传入的数组排序，排序后相同的值会相邻，然后遍历排序后数组时，新数组只加入不与前一值重复的值。
  function unique3(arr){
    arr.sort();
    var hash=[arr[0]];
    for (var i = 1; i < arr.length; i++) {
       if(arr[i]!=hash[hash.length-1]){
        hash.push(arr[i]);
       }
    }
    return hash;
  }

  //对象键值对

  //Set
  function unique5(arr){
    var x = new Set(arr);
   return [...x];
  }

  //Map
  function (arr) {
    const tmp = new Map();
    return arr.filter(item => {
    return !tmp.has(item) && tmp.set(item, 1);
    })
    }

//.reduce()
[1,4,2,7,3,9,4].reduce((prev, next)=> {
    prev.indexOf(next) === -1 && prev.push(next);
    return prev;
},[]);