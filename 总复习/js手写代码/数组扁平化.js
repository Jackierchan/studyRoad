//一
function flatten(arr) {
    return arr.reduce((result, item) => {
         return result.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}

//二

let result = [];
let fn = function(ary) {
    for(let i = 0; i < ary.length; i++) }{
        let item = ary[i];
            if (Array.isArray(ary[i])){
               fn(item);
            } else {
                result.push(item);
        }
    }
}

//三
arr_flat = arr.flat(Infinity);
//四
ary = str.replace(/(\[\]))/g, '').split(',');
//五
while (ary.some(Array.isArray)) {
    ary = [].concat(...ary);
}