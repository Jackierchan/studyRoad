var lengthOfLastWord = function(s) {
    let arr = s.split(' ').filter(i=>i!=='')
    return arr[arr.length-1].length
    };