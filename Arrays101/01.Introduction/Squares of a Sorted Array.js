/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    
    let newArray = [];
    
    newArray = nums.map( elements => {
        return Math.pow(elements,2)
    } )
    
    
    newArray.sort( (a,b) => {
        return a - b
    } )
    
  
    
    return newArray
};