/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    
    // var, let, const
    
    let numberOfOne =0;
    let maximum = 0;
    
    for(let i =  0;  i  <  nums.length; i++ ){
        if(nums[i] == 1){
            numberOfOne++
            maximum = Math.max(maximum , numberOfOne)
            
        }else{
            numberOfOne = 0;
        }
    }
    
    return maximum;
    
};