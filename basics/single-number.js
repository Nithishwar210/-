/**
 Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let result = 0;
 
    for(let i = 0; i < nums.length; i++) {
     result ^= nums[i]
    }
 
    return result
 };

 const nums = [2,2,1]


console.log(singleNumber(nums))