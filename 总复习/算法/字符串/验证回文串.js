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