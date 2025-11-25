// Algorithm Practice Problems - String
// String Problems
// 1. Longest Substring Without Repeating Characters
// Problem:
// Given a string s, find the length of the longest substring without repeating characters.



// Example:
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Explanation:
// This is a sliding window problem, where we maintain a window (substring) of unique characters and try to expand or shrink it to find the longest possible substring. The key is to use a set or map to track characters and their last seen indices.

const { prompt } = require('enquirer');

function lengthOfLongestSubstring(s) {
  const indexMap = new Map(); // char -> last index
  let maxLength = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];

    if (indexMap.has(rightChar) && indexMap.get(rightChar) >= windowStart) {
      // Shrink window start if repeated character is inside current window
      windowStart = indexMap.get(rightChar) + 1;
    }

    indexMap.set(rightChar, windowEnd);
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}



// Main program with user input
(async () => {
  const response = await prompt({
    type: 'input',
    name: 'string',
    message: 'Enter a string to find the longest substring without repeating characters:',
    validate(value) {
      if (!value || value.trim().length === 0) {
        return 'Please enter a non-empty string.';
      }
      return true;
    }
  });

  const inputString = response.string;
  
  console.log('Input string:', inputString);
  
  const length = lengthOfLongestSubstring(inputString);
  
  console.log('Length of longest substring without repeating characters:', length);
})();

