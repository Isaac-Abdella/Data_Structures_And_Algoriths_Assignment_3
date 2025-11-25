// 2. Anagram Check
// Problem:
// Given two strings s and t, return true if t is an anagram of s and false otherwise. An anagram is a word or phrase that is formed by rearranging the letters of another word or phrase, using all the original letters exactly once.

const { prompt } = require('enquirer');

// Example:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Input: s = "rat", t = "car"
// Output: false
// Explanation:
// To solve this, we need to check whether both strings have the same characters in the same frequency. A common approach is to use sorting or a hash map to count character frequencies and compare them.



function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const charCount = {};

  // Count frequency of each char in s
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Decrease counts based on chars in t
  for (const char of t) {
    if (!charCount[char]) {
      return false; // char in t not in s or too many occurrences
    }
    charCount[char]--;
  }

  // All counts should be zero if an anagram
  return true;
}


// Main program with user input
(async () => {
  const response = await prompt([
    {
      type: 'input',
      name: 'firstString',
      message: 'Enter the first string:',
      validate(value) {
        if (!value || value.trim().length === 0) {
          return 'Please enter a non-empty string.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'secondString',
      message: 'Enter the second string:',
      validate(value) {
        if (!value || value.trim().length === 0) {
          return 'Please enter a non-empty string.';
        }
        return true;
      }
    }
  ]);

  const s = response.firstString;
  const t = response.secondString;
  
  console.log('First string:', s);
  console.log('Second string:', t);
  
  const result = isAnagram(s, t);
  
  if (result) {
    console.log('Result: true (The strings are anagrams)');
  } else {
    console.log('Result: false (The strings are not anagrams)');
  }
})();

