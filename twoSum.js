/*
Given the array of integers, called nums, and an integer, called target.. Return the indices of the two numbers 
such that they add up to Target.

Assume that each input would have exactly one solution, and do not use the same element twice.

Return the answer in any order

Ex. 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9,
we return [0,1]
*/

var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};
