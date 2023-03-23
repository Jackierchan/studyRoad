var lengthOfLastWord = function(s) {
    let arr = s.split(' ').filter(i=>i!=='')
    return arr[arr.length-1].length
    };


//反向遍历
var lengthOfLastWord = function(s) {
    let index = s.length - 1;
    while (s[index] === ' ') {
        index--;
    }//排除后面是空格情况
    let wordLength = 0;
    while (index >= 0 && s[index] !== ' ') {
        wordLength++;
        index--;
    }
    return wordLength;
};
 //时间复杂度O(n),
 //空间复杂度o（1）