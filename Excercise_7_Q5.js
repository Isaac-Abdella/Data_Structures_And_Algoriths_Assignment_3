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

// Import the enquirer library for interactive command-line prompts
const { prompt } = require('enquirer');

/**
 * Finds the length of the longest substring without repeating characters
 * Uses sliding window technique with O(n) time complexity
 * @param {string} s - Input string to analyze
 * @returns {number} - Length of longest substring with unique characters
 */
function lengthOfLongestSubstring(s) {
  // Map to store character and its most recent index
  const indexMap = new Map(); // key: character, value: last seen index
  let maxLength = 0;          // Track the longest substring found
  let windowStart = 0;        // Left boundary of current window

  // Expand window by moving right boundary (windowEnd)
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd];

    // If character exists in current window, shrink from left
    if (indexMap.has(rightChar) && indexMap.get(rightChar) >= windowStart) {
      // Move window start to position after the duplicate character
      windowStart = indexMap.get(rightChar) + 1;
    }

    // Update the character's position in the map
    indexMap.set(rightChar, windowEnd);
    // Calculate current window size and update max if larger
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}



// ============================================
// Main program - Interactive user input
// ============================================
(async () => {
  // Prompt user for string input
  const response = await prompt({
    type: 'input',
    name: 'string',
    message: 'Enter a string to find the longest substring without repeating characters:',
    // Validate that input is not empty
    validate(value) {
      if (!value || value.trim().length === 0) {
        return 'Please enter a non-empty string.';
      }
      return true;
    }
  });

  // Extract the string from response
  const inputString = response.string;
  
  // Display the input string
  console.log('Input string:', inputString);
  
  // Calculate length of longest substring with unique characters
  const length = lengthOfLongestSubstring(inputString);
  
  // Display the result
  console.log('Length of longest substring without repeating characters:', length);
})();

