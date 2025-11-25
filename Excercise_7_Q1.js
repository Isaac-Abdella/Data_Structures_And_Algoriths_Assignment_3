// Page 1: 
// =======

// Algorithm Practice Problems
// Array Problems
// 1. Two Sum
// Problem:
// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target. You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// // Explanation:
// The goal is to find two numbers that sum up to the given target. This can be solved efficiently using a hash map to track the numbers and their indices as we iterate through the array.

const { prompt } = require('enquirer');

function findTwoSumIndices(nums, target) {
  const seen = new Map(); // number -> index

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (seen.has(complement)) {
      // Return array with two indices
      return [seen.get(complement), i];
    }
    seen.set(num, i);
  }

  // Return null or empty array if no pair found
  return null;
}
exports.findTwoSumIndices = findTwoSumIndices;

// Main program with user input
(async () => {
  const response = await prompt([
    {
      type: 'input',
      name: 'numbers',
      message: 'Enter integers separated by commas:',
      validate(value) {
        const parts = value.split(',').map(v => v.trim());
        if (!parts.length) return 'Please enter at least one number.';
        if (!parts.every(p => /^-?\d+$/.test(p))) {
          return 'Only integers are allowed (e.g. 1, 2, 3).';
        }
        return true;
      },
      result(value) {
        return value
          .split(',')
          .map(v => v.trim())
          .map(v => parseInt(v, 10));
      }
    },
    {
      type: 'input',
      name: 'target',
      message: 'Enter the target sum:',
      validate(value) {
        if (!/^-?\d+$/.test(value.trim())) {
          return 'Please enter a valid integer.';
        }
        return true;
      },
      result(value) {
        return parseInt(value.trim(), 10);
      }
    }
  ]);

  // Use response.numbers as nums array and response.target
  const nums = response.numbers;
  const target = response.target;
  
  console.log('Your numbers:', nums);
  console.log('Target sum:', target);
  
  const indices = findTwoSumIndices(nums, target);

  if (indices) {
    console.log('Pair indices:', indices);
    console.log(`nums[${indices[0]}] + nums[${indices[1]}] = ${nums[indices[0]]} + ${nums[indices[1]]} = ${target}`);
  } else {
    console.log('No pair found');
  }
})();
