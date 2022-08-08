/*
Given an array nums. We define a running sum of an array as
runningSum[i] = sum(nums[0]...nums[i]).

Return the running sum of nums

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6

@param {number[]} nums
@return {number[]}

Complexity Analysis

Time complexity: O(n) where n is the length of input array.

Space complexity: O(1) since we don't use any additional space to find the running sum. Note that we do not take into consideration the space occupied by the output array.

*/

var runningSum = function(nums) {
    let val = 0;
    let sum = nums.map(res => {
        return val = res + value;
    })
    return sum
};