var findTheDifference = function(s, t) {
    for(let item of s){
        t= t.replace(item,'')
    }
    return t
};

var findTheDifference = function(s, t) {
    let as = 0, at = 0;
    for (let i = 0; i < s.length; i++) {
        as += s[i].charCodeAt();
    }
    for (let i = 0; i < t.length; i++) {
        at += t[i].charCodeAt();
    }
    return String.fromCharCode(at - as);
}
 //时间复杂度O(n)
 //空间复杂度o（1）