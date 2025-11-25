
// 2. Move Zeroes
// Problem:
// Given an array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. Do this in-place without making a copy of the array.

// Import the enquirer library for interactive command-line prompts
const { prompt } = require("enquirer");

// Example:
// Input: nums = [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
// Explanation:
// The task is to shift all zeroes to the end of the array while keeping the order of non-zero elements intact. This can be accomplished using the two-pointer technique to move non-zero elements forward.

/**
 * Moves all zeros in the array to the end while maintaining relative order
 * of non-zero elements. Operates in-place with O(n) time complexity.
 * @param {number[]} nums - Array to modify (modified in-place)
 */
function moveZeroes(nums) {
  // Pointer to track where the next non-zero element should be placed
  let lastNonZeroFoundAt = 0;

  // Iterate through entire array
  for (let current = 0; current < nums.length; current++) {
    // If current element is non-zero
    if (nums[current] !== 0) {
      // Move it to the lastNonZeroFoundAt position
      nums[lastNonZeroFoundAt] = nums[current];
      // If we moved an element, replace its old position with 0
      if (current !== lastNonZeroFoundAt) {
        nums[current] = 0;
      }
      // Increment the non-zero pointer
      lastNonZeroFoundAt++;
    }
    // If current element is 0, we skip it and continue
  }
}
// ============================================
// Main program - Interactive user input
// ============================================
(async () => {
  // Prompt user for array input
  const response = await prompt({
    type: 'input',
    name: 'numbers',
    message: 'Enter integers separated by commas (include zeros):',
    // Validate that all inputs are valid integers
    validate(value) {
      const parts = value.split(',').map(v => v.trim());
      if (!parts.length) return 'Please enter at least one number.';
      // Check each part is a valid integer (including negative)
      if (!parts.every(p => /^-?\d+$/.test(p))) {
        return 'Only integers are allowed (e.g. 0, 1, 0, 3, 12).';
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
  
  // Display original array
  console.log('Original array:', nums);
  
  // Move all zeros to the end (modifies array in-place)
  moveZeroes(nums);
  
  // Display modified array
  console.log('Array after moving zeroes:', nums);
})();

