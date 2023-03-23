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
