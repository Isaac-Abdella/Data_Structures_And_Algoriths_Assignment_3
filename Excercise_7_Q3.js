// Find the Second Largest Element in an Array
// Problem
// Given an array of integers, write a function to find the second largest element in the array. If there is no second largest element (i.e., if the array contains fewer than two distinct elements), return -1.


// Import the enquirer library for interactive command-line prompts
const { prompt } = require("enquirer");

// Example:
// Input: [3, 5, 2, 8, 6]
// Output: 6

/**
 * Finds the second largest element in an array
 * Returns -1 if there are fewer than two distinct elements
 * Uses single-pass algorithm with O(n) time complexity
 * @param {number[]} nums - Array of integers to search
 * @returns {number} - Second largest element or -1 if not found
 */
function findSecondLargest(nums) {
  // Initialize tracking variables to negative infinity
  let largest = -Infinity;
  let secondLargest = -Infinity;

  // Single pass through the array
  for (const num of nums) {
    if (num > largest) {
      // Found new largest - old largest becomes second largest
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      // Found new second largest (but not equal to largest)
      secondLargest = num;
    }
    // If num <= secondLargest, we skip it
  }

  // Return -1 if no valid second largest exists (array too small or all same values)
  return (secondLargest === -Infinity) ? -1 : secondLargest;
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
  
  // Find the second largest element
  const secondLargest = findSecondLargest(nums);
  
  // Display the result
  if (secondLargest === -1) {
    // No valid second largest (array too small or all same values)
    console.log('No second largest element found (array has fewer than two distinct elements).');
  } else {
    // Second largest element found
    console.log('Second largest element:', secondLargest);
  }
})();

