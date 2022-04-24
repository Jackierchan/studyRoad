// var sleeper =function (name){
//     console.log('Hi, i am'+name)
// }
// sleeper.like= function(friut){
//     console.log(' I like eat '+friut)
// }
// sleeper.wait=function(num){
//     new Promise((res)=>{
//         setTimeout(()=>{
//             sleeper.like()
//         },num)
//     }).th
// }
// const pipe = (...args) => x => args.reduce((res, cb) => cb(res), x)

// sleeper('jack')

// const foo =(...a)=>console.log(a)
// foo([1,2,3],4)

// const foo2=(...[a])=>console.log(a)
// foo2([1,2,3],4)

// const objA={a:1}
// import { a } from './a'
// setTimeout(function(){
//     console.log('aa',a)
// // },1000)
// function foo(){foo.a=function(){ console.log(1)}
//  this.a=function(){console.log(2)} } foo.a=function(){ console.log(4)} 
// foo.a()
// let obj =new foo()
// foo.prototype.a=function(){
//     console.log(3)
// }
// obj.a()
// foo.a()

// async function t1 () {
//     console.log(1)
//     console.log(2)
//     new Promise( function ( resolve ) {
//          console.log( 'promise3' )
//         resolve();
//     } ).then( function () {
//         console.log( 'promise4' )
//     } )
//     await new Promise( function ( resolve ) {
//         console.log( 'b' )
//         resolve();
//     } ).then( function () {
//      console.log( 't1p' )
//     } )
    
//     console.log(3)
//     console.log(4)
//     new Promise( function ( resolve ) {
//          console.log( 'promise5' )
//     resolve();
//     } ).then( function () {
//          console.log( 'promise6' )
//     } )
// }
    
//     setTimeout( function () {
//          console.log( 'setTimeout' )
//     }, 0 )
    
//     async function t2() {
//     console.log(5)
//     console.log(6)
//     await Promise.resolve().then(() => console.log('t2p'))
//     console.log(7)
//     console.log(8)
//     }
    
//     t1()
//     new Promise( function ( resolve ) {
//     console.log( 'promise1' )
//     resolve();
//     } ).then( function () {
//     console.log( 'promise2' )
//     } )
//     t2()
    
//     console.log('end');
// 1
// 2
// promise3
// b
// promise1
// 5
// 6
// end
// promise4
// t1p
// promise2
// t2p
// 3
// 4
// promise5
// 7
// 8
// promise6
// setTimeout
// console.log(Array.__proto__)

// new Promise((res)=>{
//     console.log(4)
//     setTimeout(()=>{
//         res(5)
//     },0)
//     setTimeout(()=>{
//         console.log(6)
//     },0)
// }).then(res=>{
//     console.log(res)
//     setTimeout(()=>{
//         console.log(7)
//     },0)
//     return res.push('y')
// }).then(res=>{
//     console.log(8)
// }).catch(err=>{
//     console.log(9)
// })

// function F(){
//     this.d=4
// }
// const F = ()=>{ this.d=4}
// F.a=1
// F.prototype.b=2
// F.__proto__.constructor.c=3
// var obj =new F()

// console.log(obj.ca,obj.b,obj.c,obj.d)
new Promise((res,rej)=>{
    rej()
}).catch((er)=>{

}).then((res)=>{
console.log(1)
})