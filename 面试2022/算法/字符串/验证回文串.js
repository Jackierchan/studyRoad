var isPalindrome = function(s) {
    s=s.toLowerCase()
    let l =0,r=s.length-1,result=true
    var reg= /^[A-Za-z0-9]/;
    while(l<=r){
        if(!reg.test(s[l])){
            l++
            continue
        }
        if(!reg.test(s[r])){
            r--
            continue
        }
        if(s[l]==s[r]){

            l++
            r--
        }else{
            result = false
            break
        }
    }
    return result
}
//双指针加正则过滤
var isPalindrome = function(s) {
    s=s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
     let i=0,j=s.length-1;
     while(i<j){
         if(s[i]!=s[j]){
            return false;
         }
         i++;
         j--;
     }
 return true;
 };
 //时间复杂度O(s)
 //空间复杂度o（1）