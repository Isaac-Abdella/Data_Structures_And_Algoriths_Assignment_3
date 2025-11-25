//  Contains Duplicate
// Problem:
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Import the enquirer library for interactive command-line prompts
const { prompt } = require('enquirer');

// Example:
// Input: nums = [1, 2, 3, 1]
// Output: true
// Input: nums = [1, 2, 3, 4]
// Output: false
// Explanation:
// To determine if there are any duplicate values in the array, you can use a hash set to track the numbers as you iterate through the array. If a number is already in the set, return true; otherwise, continue checking the next element.

/**
 * Checks if an array contains any duplicate values
 * Uses a Set for O(n) time complexity and O(n) space complexity
 * @param {number[]} nums - Array of integers to check
 * @returns {boolean} - true if duplicates exist, false otherwise
 */
function containsDuplicate(nums) {
  // Use a Set to track numbers we've already seen
  const seen = new Set();

  // Iterate through each number in the array
  for (const num of nums) {
    // If we've seen this number before, we found a duplicate
    if (seen.has(num)) {
      return true;
    }
    // Add current number to the set for future checks
    seen.add(num);
  }

  // Completed iteration without finding duplicates
  return false;
}



// ============================================
// Main program - Interactive user input
// ============================================
(async () => {
  // Prompt user for array input
  const response = await prompt({
    type: 'input',
    name: 'numbers',
    message: 'Enter integers separated by commas:',
    // Validate that all inputs are valid integers
    validate(value) {
      const parts = value.split(',').map(v => v.trim());
      if (!parts.length) return 'Please enter at least one number.';
      // Check each part is a valid integer (including negative)
      if (!parts.every(p => /^-?\d+$/.test(p))) {
        return 'Only integers are allowed (e.g. 3, 5, 2, 8, 6).';
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
  });

  // Extract the array from response
  const nums = response.numbers;
  
  // Display the input array
  console.log('Array:', nums);
  
  // Check if array contains duplicates
  const hasDuplicate = containsDuplicate(nums);
  
  // Display the result with explanation
  if (hasDuplicate) {
    console.log('Result: true (Array contains duplicates)');
  } else {
    console.log('Result: false (All elements are distinct)');
  }
})();

