//  Contains Duplicate
// Problem:
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const { prompt } = require('enquirer');

// Example:
// Input: nums = [1, 2, 3, 1]
// Output: true
// Input: nums = [1, 2, 3, 4]
// Output: false
// Explanation:
// To determine if there are any duplicate values in the array, you can use a hash set to track the numbers as you iterate through the array. If a number is already in the set, return true; otherwise, continue checking the next element.

function containsDuplicate(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true; // Duplicate found
    }
    seen.add(num);
  }

  return false; // No duplicates found
}



// Main program with user input
(async () => {
  const response = await prompt({
    type: 'input',
    name: 'numbers',
    message: 'Enter integers separated by commas:',
    validate(value) {
      const parts = value.split(',').map(v => v.trim());
      if (!parts.length) return 'Please enter at least one number.';
      if (!parts.every(p => /^-?\d+$/.test(p))) {
        return 'Only integers are allowed (e.g. 3, 5, 2, 8, 6).';
      }
      return true;
    },
    result(value) {
      return value
        .split(',')
        .map(v => v.trim())
        .map(v => parseInt(v, 10));
    }
  });

  const nums = response.numbers;
  
  console.log('Array:', nums);
  
  const hasDuplicate = containsDuplicate(nums);
  
  if (hasDuplicate) {
    console.log('Result: true (Array contains duplicates)');
  } else {
    console.log('Result: false (All elements are distinct)');
  }
})();

