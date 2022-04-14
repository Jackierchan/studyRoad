//树转数组

/**
 * 树转数组扁平化结构   
 * 深度优先遍历  堆栈  后进先出
 */
function deep(node){
    let stack = node,
        data = [];
    while(stack.length != 0){
        let pop = stack.pop();
        data.push({
            id: pop.id,
            name: pop.name,
            parentId: pop.parentId
        })
        let children = pop.children
        if(children){
            for(let i = children.length-1; i >=0; i--){
                stack.push(children[i])
            }
        }
    }
    return data
}
//console.log(deep(res1))

/**
 * 树转数组扁平化结构   
 * 深度优先遍历  递归
 */
function deepTraversal(data) {
    const result = [];
    data.forEach(item => {
        const loop = data => {
            result.push({
                id: data.id,
                name: data.name,
                parentId: data.parentId
            });
            let child = data.children
            if(child){
                for(let i = 0; i < child.length; i++){
                    loop(child[i])
                }
            }
        }
        loop(item);
    })
    return result;
}
//console.log(deepTraversal(res1))

/**
 * 广度优先
 * 队列  先进先出
 */
function wideTraversal(node){
    let stack = node,
        data = [];
    while(stack.length != 0){
        let shift = stack.shift();
        data.push({
            id: shift.id,
            name: shift.name,
            parentId: shift.parentId
        })
        let children = shift.children
        if(children){
            for(let i = 0; i < children.length; i++){
                stack.push(children[i])
            }
        }
    }
    return data
}


//数组转树

function toTree(data) {
    // 1.定义最外层的数组
    const tree = []
    // 2.定义一个空对象
    const otherObj = {}
    // 3.遍历数组内所有对象
    data.forEach(item => {
      // 3.1.给每个当前对象添加一个 children 属性, 以便存放子级对象
      item.children = []
      // 3.2 将当前对象的 id 作为键, 与当前对象自身形成键值对
      otherObj[item.id] = item
    })

    // 4.再次遍历数组内所有对象
    data.forEach(item => {
      // 4.1.判断每个当前对象的 pid, 如当前对象 pid 不为空, 则说明不是最上级的根对象
      if (item.pid) {
          // 4.3.利用当前对象的 otherObj[pid] 找到 otherObj[id] 中对应当前对象的父级对象, 将当前对象添加到其对应的父级对象的 children 属性中
          otherObj[item.pid].children.push(item)
      } else {
        // 4.3.当前对象 pid 如果为空, 则为树状结构的根对象
        tree.push(item)
      }
    })
    // 5.返回树状结构
    return tree
  }

toTree(data)




