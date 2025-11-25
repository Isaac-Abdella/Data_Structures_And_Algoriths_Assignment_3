// Page 1: 
// =======

// Algorithm Practice Problems
// Array Problems
//
//
// =================
// || Q1. Two Sum ||
// =================
//
//
// Problem:
// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target. You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// // Explanation:
// The goal is to find two numbers that sum up to the given target. This can be solved efficiently using a hash map to track the numbers and their indices as we iterate through the array.

const { prompt } = require('enquirer');

function findTwoSumIndices(nums, target) {
  const seen = new Map(); // number -> index

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (seen.has(complement)) {
      // Return array with two indices
      return [seen.get(complement), i];
    }
    seen.set(num, i);
  }

  // Return null or empty array if no pair found
  return null;
}

async function runTwoSum() {
  const response = await prompt([
    {
      type: 'input',
      name: 'numbers',
      message: 'Enter integers separated by commas:',
      validate(value) {
        const parts = value.split(',').map(v => v.trim());
        if (!parts.length) return 'Please enter at least one number.';
        if (!parts.every(p => /^-?\d+$/.test(p))) {
          return 'Only integers are allowed (e.g. 1, 2, 3).';
        }
        return true;
      },
      result(value) {
        return value
          .split(',')
          .map(v => v.trim())
          .map(v => parseInt(v, 10));
      }
    },
    {
      type: 'input',
      name: 'target',
      message: 'Enter the target sum:',
      validate(value) {
        if (!/^-?\d+$/.test(value.trim())) {
          return 'Please enter a valid integer.';
        }
        return true;
      },
      result(value) {
        return parseInt(value.trim(), 10);
      }
    }
  ]);

  const nums = response.numbers;
  const target = response.target;
  
  console.log('\nYour numbers:', nums);
  console.log('Target sum:', target);
  
  const indices = findTwoSumIndices(nums, target);

  if (indices) {
    console.log('Pair indices:', indices);
    console.log(`nums[${indices[0]}] + nums[${indices[1]}] = ${nums[indices[0]]} + ${nums[indices[1]]} = ${target}\n`);
  } else {
    console.log('No pair found\n');
  }
}


// =====================
// || Q2. Move Zeroes ||
// =====================

// 
// Problem:
// Given an array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. Do this in-place without making a copy of the array.

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

async function runMoveZeroes() {
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
  
  console.log('\nOriginal array:', nums);
  
  moveZeroes(nums);
  
  console.log('Array after moving zeroes:', nums, '\n');
}

// ======================================
// || Q3. Find Second Largest Element  ||
// ======================================

// Find the Second Largest Element in an Array
// Problem
// Given an array of integers, write a function to find the second largest element in the array. If there is no second largest element (i.e., if the array contains fewer than two distinct elements), return -1.

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

async function runFindSecondLargest() {
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
  
  console.log('\nArray:', nums);
  
  const secondLargest = findSecondLargest(nums);
  
  if (secondLargest === -1) {
    console.log('No second largest element found (array has fewer than two distinct elements).\n');
  } else {
    console.log('Second largest element:', secondLargest, '\n');
  }
}



//  
// ============================
// || Q4. Contains Duplicate ||
// ============================
//
// Problem:
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

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

async function runContainsDuplicate() {
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
  
  console.log('\nArray:', nums);
  
  const hasDuplicate = containsDuplicate(nums);
  
  if (hasDuplicate) {
    console.log('Result: true (Array contains duplicates)\n');
  } else {
    console.log('Result: false (All elements are distinct)\n');
  }
}


// ============
// || Page 2 ||
// ============

// =================================================================
// || Q5. Longest Substring Without Repeating Characters - String ||
// =================================================================
// 
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

async function runLongestSubstring() {
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
  
  console.log('\nInput string:', inputString);
  
  const length = lengthOfLongestSubstring(inputString);
  
  console.log('Length of longest substring without repeating characters:', length, '\n');
}


// ========================
// || Q6. Anagram Check ||
// ========================


// 
// Problem:
// Given two strings s and t, return true if t is an anagram of s and false otherwise. An anagram is a word or phrase that is formed by rearranging the letters of another word or phrase, using all the original letters exactly once.

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

async function runAnagramCheck() {
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
  
  console.log('\nFirst string:', s);
  console.log('Second string:', t);
  
  const result = isAnagram(s, t);
  
  if (result) {
    console.log('Result: true (The strings are anagrams)\n');
  } else {
    console.log('Result: false (The strings are not anagrams)\n');
  }
}

// ===================
// || MAIN MENU ||
// ===================

async function mainMenu() {
  let running = true;

  while (running) {
    const response = await prompt({
      type: 'select',
      name: 'choice',
      message: 'Select a program to run:',
      choices: [
        'Q1. Two Sum',
        'Q2. Move Zeroes',
        'Q3. Find Second Largest Element',
        'Q4. Contains Duplicate',
        'Q5. Longest Substring Without Repeating Characters',
        'Q6. Anagram Check',
        'Exit'
      ]
    });

    console.clear();

    switch (response.choice) {
      case 'Q1. Two Sum':
        await runTwoSum();
        break;
      case 'Q2. Move Zeroes':
        await runMoveZeroes();
        break;
      case 'Q3. Find Second Largest Element':
        await runFindSecondLargest();
        break;
      case 'Q4. Contains Duplicate':
        await runContainsDuplicate();
        break;
      case 'Q5. Longest Substring Without Repeating Characters':
        await runLongestSubstring();
        break;
      case 'Q6. Anagram Check':
        await runAnagramCheck();
        break;
      case 'Exit':
        console.log('Goodbye!');
        running = false;
        break;
    }
  }
}

// Start the main menu
mainMenu();

