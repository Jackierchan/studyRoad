// 1.交换律：a ^ b ^ c <=> a ^ c ^ b

// 2.任何数于0异或为任何数 0 ^ n => n

// 3.相同的数异或为0: n ^ n => 0
// a^b^a=b
//异或 相同得0，不同得1
var singleNumber = function(nums) {
    let r =0
    for(let a = 0;a<nums.length;a++){
     r =r^nums[a]
    }
    return r
};