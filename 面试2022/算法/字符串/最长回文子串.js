var longestPalindrome = function(s) {
    let i=0,
    start=0,
    maxLength=1;
    if(s.length<2){
         return s[0]
    }
    function if1(left,right){
        while(left>=0&&right<s.length&&s[left]==s[right]){
            if(right-left+1>maxLength){
                maxLength=right-left+1
                start = left
            }
            left--
            right++
        }
    }
    
    for(i;i<s.length;i++){
        if1(i-1,i+1)
        if1(i,i+1)
    }
    return s.substring(start,start+maxLength)
};