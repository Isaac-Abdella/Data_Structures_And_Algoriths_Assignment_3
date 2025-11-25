// Find the Second Largest Element in an Array
// Problem
// Given an array of integers, write a function to find the second largest element in the array. If there is no second largest element (i.e., if the array contains fewer than two distinct elements), return -1.


const { prompt } = require("enquirer");

// Example:
// Input: [3, 5, 2, 8, 6]
// Output: 6




function findSecondLargest(nums) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of nums) {
    if (num > largest) {
      secondLargest = largest;  // old largest becomes second largest
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }

  return (secondLargest === -Infinity) ? -1 : secondLargest;
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
  
  const secondLargest = findSecondLargest(nums);
  
  if (secondLargest === -1) {
    console.log('No second largest element found (array has fewer than two distinct elements).');
  } else {
    console.log('Second largest element:', secondLargest);
  }
})();

