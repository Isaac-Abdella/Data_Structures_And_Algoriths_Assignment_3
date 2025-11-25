# Assignment 3 - Algorithm Practice Problems

A collection of JavaScript algorithm implementations focusing on array and string manipulation problems. This assignment contains interactive command-line programs that demonstrate fundamental algorithmic concepts and data structures.

## 📋 Table of Contents

- [Overview](#overview)
- [Problems Included](#problems-included)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Algorithm Details](#algorithm-details)
- [Author](#author)

## Overview

This project implements six common algorithm practice problems used in technical interviews and coding assessments. Each problem is implemented as a standalone, interactive Node.js program that accepts user input and demonstrates the algorithm in action.

## Problems Included

### Array Problems

1. **Two Sum** - Find two numbers in an array that add up to a target value
2. **Move Zeroes** - Move all zeros in an array to the end while maintaining order
3. **Second Largest Element** - Find the second largest number in an array
4. **Contains Duplicate** - Check if an array contains any duplicate values

### String Problems

5. **Longest Substring Without Repeating Characters** - Find the length of the longest substring with unique characters
6. **Anagram Check** - Determine if two strings are anagrams of each other

## Prerequisites

- **Node.js** (v12.0 or higher recommended)
- **npm** (Node Package Manager)

## Installation

1. Clone or navigate to the project directory:
```powershell
cd c:\MyDocumentsCDrive\UBC_Ext_Learning\Soft_Dev_BC_Course\Assignments\Assignment_3\Assignment_3
```

2. Install dependencies:
```powershell
npm install
```

This will install the required `enquirer` package for interactive prompts.

## Usage

You can run each problem individually or execute all problems in sequence.

### Running Individual Problems

```powershell
# Question 1: Two Sum
node Excercise_7_Q1.js

# Question 2: Move Zeroes
node Excercise_7_Q2.js

# Question 3: Second Largest Element
node Excercise_7_Q3.js

# Question 4: Contains Duplicate
node Excercise_7_Q4.js

# Question 5: Longest Substring Without Repeating Characters
node Excercise_7_Q5.js

# Question 6: Anagram Check
node Excercise_7_Q6.js
```

### Running All Problems

Execute all six problems in sequence with an interactive menu:

```powershell
node Excercise_7_AllQs.js
```

### Example Interactions

**Two Sum Example:**
```
Enter integers separated by commas: 2,7,11,15
Enter the target sum: 9
Output: [0, 1]
```

**Move Zeroes Example:**
```
Enter integers separated by commas: 0,1,0,3,12
Output: [1, 3, 12, 0, 0]
```

**Anagram Check Example:**
```
Enter the first string: anagram
Enter the second string: nagaram
Output: true
```

## File Structure

```
Assignment_3/
├── Excercise_7_Q1.js         # Two Sum implementation
├── Excercise_7_Q2.js         # Move Zeroes implementation
├── Excercise_7_Q3.js         # Second Largest Element implementation
├── Excercise_7_Q4.js         # Contains Duplicate implementation
├── Excercise_7_Q5.js         # Longest Substring implementation
├── Excercise_7_Q6.js         # Anagram Check implementation
├── Excercise_7_AllQs.js      # Combined runner for all problems
├── Excercises_7.md           # Problem descriptions and requirements
├── package.json              # Project dependencies
└── Readme.md                 # This file
```

## Algorithm Details

### Q1: Two Sum
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)
- **Approach:** Hash map to store complements

### Q2: Move Zeroes
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)
- **Approach:** Two-pointer technique (in-place)

### Q3: Second Largest Element
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)
- **Approach:** Single-pass tracking of largest and second largest

### Q4: Contains Duplicate
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)
- **Approach:** Hash set for duplicate detection

### Q5: Longest Substring Without Repeating Characters
- **Time Complexity:** O(n)
- **Space Complexity:** O(min(n, m)) where m is character set size
- **Approach:** Sliding window with hash map

### Q6: Anagram Check
- **Time Complexity:** O(n)
- **Space Complexity:** O(1) - limited to character set size
- **Approach:** Character frequency counting

## Author

Created as part of UBC Extended Learning Software Development Bootcamp Course - Assignment 3 by Isaac Abdella.

---

**Course:** Software Development Bootcamp  
**Institution:** UBC Extended Learning  
**Assignment:** Assignment 3 - Lesson 7 - Algorithm Practice Problems
