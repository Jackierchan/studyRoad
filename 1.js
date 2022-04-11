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

// var tree = function(list,parentID){
//     //定义一个用于递归查找子元素的函数
//         var child = function(pareID){
//         //先定义一个数组，用于存储所查到的子元素
//             var childs = []
//             //循环数组
//             for(let i = 0; i<list.length;i++) {
//             //如果数组其中一项的parentId等于传入的，说明这一项是传入的子元素，把他push进数组，然后重复递归自己找该项的子元素
//                 if(list[i].parentId == pareID) {
//                     list[i].children = child(list[i].id)
//                     childs.push(list[i])
//                 }
//             }
//             //最后将查到的所有子元素返回
//             return childs;
//         }
//         return child(parentID)
//     }
//     var list=[
//         {id:2,name:'部门B',parentId:0},
//         {id:3,name:'部门C',parentId:1},
//         {id:1,name:'部门A',parentId:2},
//         {id:4,name:'部门D',parentId:1},
//         {id:5,name:'部门E',parentId:2},
//         {id:6,name:'部门F',parentId:3},
//         {id:7,name:'部门G',parentId:2},
//         {id:8,name:'部门H',parentId:4}
//     ]
    
//     console.log(tree(list))



let arrList = [
    { id: 1, name: "部门1", pid: 0 },
    { id: 10, name: "部门10", pid: 0 },
    { id: 2, name: "部门2", pid: 1 },
    { id: 3, name: "部门3", pid: 1 },
    { id: 4, name: "部门4", pid: 3 },
    { id: 6, name: "部门6", pid: 3 },
    { id: 8, name: "部门8", pid: 3 },
    { id: 7, name: "部门7", pid: 4 },
    { id: 5, name: "部门5", pid: 4 },
    { id: 9, name: "部门9", pid: 8 },
  ];
  function getTree(arr){
      let obj ={}
      treeList = [];
      arr.forEach(item=>{
          obj[item.id] = item 
          if(obj[item.pid]){
              if(obj[item.pid].children){
                  obj[item.pid].children.push(item)
              }else{
                  obj[item.pid].children =[item]
              }
          }else{
              treeList.push(item)
          }
      })
      return treeList 
  }
  console.log(getTree(arrList)) 
