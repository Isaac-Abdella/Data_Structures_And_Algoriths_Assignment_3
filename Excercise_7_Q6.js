// 2. Anagram Check
// Problem:
// Given two strings s and t, return true if t is an anagram of s and false otherwise. An anagram is a word or phrase that is formed by rearranging the letters of another word or phrase, using all the original letters exactly once.

// Import the enquirer library for interactive command-line prompts
const { prompt } = require('enquirer');

// Example:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Input: s = "rat", t = "car"
// Output: false
// Explanation:
// To solve this, we need to check whether both strings have the same characters in the same frequency. A common approach is to use sorting or a hash map to count character frequencies and compare them.

/**
 * Checks if two strings are anagrams of each other
 * Uses character frequency counting with O(n) time complexity
 * @param {string} s - First string
 * @param {string} t - Second string
 * @returns {boolean} - true if strings are anagrams, false otherwise
 */
function isAnagram(s, t) {
  // Quick check: anagrams must have the same length
  if (s.length !== t.length) return false;

  // Object to store character frequency counts
  const charCount = {};

  // Count frequency of each character in first string
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Decrease counts based on characters in second string
  for (const char of t) {
    // If character doesn't exist or count is already 0, not an anagram
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  // If we get here, all character counts balanced out to zero
  return true;
}


// ============================================
// Main program - Interactive user input
// ============================================
(async () => {
  // Prompt user for two strings to compare
  const response = await prompt([
    {
      // First prompt: Get first string
      type: 'input',
      name: 'firstString',
      message: 'Enter the first string:',
      // Validate that input is not empty
      validate(value) {
        if (!value || value.trim().length === 0) {
          return 'Please enter a non-empty string.';
        }
        return true;
      }
    },
    {
      // Second prompt: Get second string
      type: 'input',
      name: 'secondString',
      message: 'Enter the second string:',
      // Validate that input is not empty
      validate(value) {
        if (!value || value.trim().length === 0) {
          return 'Please enter a non-empty string.';
        }
        return true;
      }
    }
  ]);

  // Extract both strings from response
  const s = response.firstString;
  const t = response.secondString;
  
  // Display the input strings
  console.log('First string:', s);
  console.log('Second string:', t);
  
  // Check if the strings are anagrams
  const result = isAnagram(s, t);
  
  // Display the result with explanation
  if (result) {
    console.log('Result: true (The strings are anagrams)');
  } else {
    console.log('Result: false (The strings are not anagrams)');
  }
})();

