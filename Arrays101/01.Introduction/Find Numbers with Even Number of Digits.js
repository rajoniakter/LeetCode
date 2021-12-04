/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    let numberOfEven = 0;
    for( let i = 0; i < nums.length; i++){
        let num = String(nums[i])
        
        if(num.length % 2 === 0 ){
            numberOfEven++
        }
    }
    
    return numberOfEven;
};