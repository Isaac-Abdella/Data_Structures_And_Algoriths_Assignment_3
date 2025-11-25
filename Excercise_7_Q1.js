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

// Import the enquirer library for interactive command-line prompts
const { prompt } = require('enquirer');

/**
 * Finds two indices in the array whose values sum to the target
 * Uses a hash map approach for O(n) time complexity
 * @param {number[]} nums - Array of integers to search
 * @param {number} target - Target sum value
 * @returns {number[]|null} - Array of two indices [i, j] or null if no solution
 */
function findTwoSumIndices(nums, target) {
  // Create a Map to store numbers we've seen and their indices
  const seen = new Map(); // key: number, value: index

  // Iterate through the array once
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // Calculate what number we need to reach the target
    const complement = target - num;

    // Check if we've already seen the complement
    if (seen.has(complement)) {
      // Found the pair! Return both indices
      return [seen.get(complement), i];
    }
    // Store current number and its index for future lookups
    seen.set(num, i);
  }

  // No valid pair found that sums to target
  return null;
}
// Export function for use in other modules
exports.findTwoSumIndices = findTwoSumIndices;

// ============================================
// Main program - Interactive user input
// ============================================
(async () => {
  // Prompt user for input using enquirer library
  const response = await prompt([
    {
      // First prompt: Get array of integers
      type: 'input',
      name: 'numbers',
      message: 'Enter integers separated by commas:',
      // Validate input to ensure only integers are entered
      validate(value) {
        const parts = value.split(',').map(v => v.trim());
        if (!parts.length) return 'Please enter at least one number.';
        // Check each part is a valid integer (including negative)
        if (!parts.every(p => /^-?\d+$/.test(p))) {
          return 'Only integers are allowed (e.g. 1, 2, 3).';
        }
        return true;
      },
      // Transform input string into array of integers
      result(value) {
        return value
          .split(',')              // Split by comma
          .map(v => v.trim())      // Remove whitespace
          .map(v => parseInt(v, 10)); // Convert to integers
      }
    },
    {
      // Second prompt: Get target sum
      type: 'input',
      name: 'target',
      message: 'Enter the target sum:',
      // Validate that target is a valid integer
      validate(value) {
        if (!/^-?\d+$/.test(value.trim())) {
          return 'Please enter a valid integer.';
        }
        return true;
      },
      // Convert string to integer
      result(value) {
        return parseInt(value.trim(), 10);
      }
    }
  ]);

  // Extract user input from response object
  const nums = response.numbers;     // Array of integers
  const target = response.target;     // Target sum
  
  // Display the input values
  console.log('Your numbers:', nums);
  console.log('Target sum:', target);
  
  // Call the two sum function to find indices
  const indices = findTwoSumIndices(nums, target);

  // Display the result
  if (indices) {
    // Solution found - show the indices and the calculation
    console.log('Pair indices:', indices);
    console.log(`nums[${indices[0]}] + nums[${indices[1]}] = ${nums[indices[0]]} + ${nums[indices[1]]} = ${target}`);
  } else {
    // No valid pair exists that sums to target
    console.log('No pair found');
  }
})();
