# Two Sum Practice

Practice solutions for the classic **Two Sum** problem in JavaScript.

## Problem Description
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

---

## Approaches

### 1. Hash Map (`Map`) - Optimal Approach
- **Time Complexity:** $O(n)$ - single pass through the array with average $O(1)$ lookups in the Map.
- **Space Complexity:** $O(n)$ - stores elements and their indices in the Map.

#### Step-by-Step Logic:
1. Create an empty `Map` to store numbers and their indices (`Map<number, index>`).
2. Iterate through each number in the array.
3. Calculate the complement needed: `complement = target - nums[i]`.
4. Check if the complement already exists in the map:
   - If **yes**: return `[map.get(complement), i]`.
   - If **no**: save the current number and its index in the map: `map.set(nums[i], i)`.
5. Continue until the solution pair is found.

---

### 2. Brute Force (Nested Loops)
- **Time Complexity:** $O(n^2)$ - checks every pair of numbers.
- **Space Complexity:** $O(1)$ - no extra data structures needed.

---

## Running the Code

```bash
node twoSum.js
```
