var aa= function(...arguments){
    let arr=[]
    arr.push(...arguments)
    // console.log(this)
    let func=function(...arguments){
        arr.push(...arguments)
        return func
    }
    func.valueOf=function(){
        return arr.reduce((a,b)=>{
            return a+b
        })
    }
    return func
}
// aa(1,1,1,1).valueOf()
console.log(aa(1,1,1,1).valueOf())
console.log(aa(1,2,3)(1)(2)(4).valueOf())