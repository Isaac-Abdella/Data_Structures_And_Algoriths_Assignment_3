
// 2. Move Zeroes
// Problem:
// Given an array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. Do this in-place without making a copy of the array.

const { prompt } = require("enquirer");

// Example:
// Input: nums = [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
// Explanation:
// The task is to shift all zeroes to the end of the array while keeping the order of non-zero elements intact. This can be accomplished using the two-pointer technique to move non-zero elements forward.

function moveZeroes(nums) {
  let lastNonZeroFoundAt = 0;

  for (let current = 0; current < nums.length; current++) {
    if (nums[current] !== 0) {
      nums[lastNonZeroFoundAt] = nums[current];
      if (current !== lastNonZeroFoundAt) {
        nums[current] = 0;
      }
      lastNonZeroFoundAt++;
    }
  }
}
// Main program with user input
(async () => {
  const response = await prompt({
    type: 'input',
    name: 'numbers',
    message: 'Enter integers separated by commas (include zeros):',
    validate(value) {
      const parts = value.split(',').map(v => v.trim());
      if (!parts.length) return 'Please enter at least one number.';
      if (!parts.every(p => /^-?\d+$/.test(p))) {
        return 'Only integers are allowed (e.g. 0, 1, 0, 3, 12).';
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
  
  console.log('Original array:', nums);
  
  moveZeroes(nums);
  
  console.log('Array after moving zeroes:', nums);
})();

