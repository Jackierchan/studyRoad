var arr = [1,2,3,[1,5,6,[7,9,[11,32]]],10];
var a=1;
function multiarr(arr){
    for (i=0;i<arr.length;i++){
                if(arr[i] instanceof Array){
                a++;
                arr = arr[i];
                multiarr(arr);
            }
        }
    return a;
}
console.log(multiarr(arr));


// 方法二：
// let strarr = JSON.stringify([1,2,3,[1,5,6,[7,9,[11,32]]],10]);
// let arrofpre = [];
// for(let i = 0 ; i < strarr.length; i++){
//     if(strarr[i] === '['){
//           arrofpre.push(strarr[i])
// 　 }
// };
// console.log(arrofpre .length)