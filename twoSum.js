var twoSum = function (nums, target) {
  const map = new Map(); // here we creating a empty map

  for (let i = 0; i < nums.length; i++) { // loop thorugh the array
    const complement = target - nums[i]; // calculate the complement if i = 0; the key is 1 -> and our target is 7; so nums[i] = 1; complement = 7-1; complement = 6; 
    // we need the number 6. but its not in the array. for this we check ->

    if (map.has(complement)) { // checkin the array ahve that number ????
      return [map.get(complement), i]; // at the first iteration we got empty map so it return false, then second iteration happening -> then the map got first item 1 then 
      // the complement is complement = target - nums[i] = 7-1 =6; map.has(6). false. then next loop 7-2 =5; then again checking map.has(5). it have 5 -> true
    } // at initail we got empty map right - so we need to chekc the previous that's why have the index i -> map.get(complement) -> retrives the index of previous seen number, i is the index of current number.
    map.set(nums[i], i); // stores the current number. if the complement is not found, remember the current number and its index for future iterations.
  }
};

var twoSumm = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([1, 2, 3, 4, 5], 7));

// Map stores key value pairs. key -> the number we have seen. value -> the index where we found that number.
// when we need to check whether a number exists in the map, we can use:  map.has(complement) and we can retrive its index ->
// map.get(complement). here we dont need to check the array again. A map provides average O(1) lookup time. 
// step by step-> 
// 1. Create an empty map to remember numbers and their indexes.
// 2. Visit each number in the array.
// 3. Calculate the number needed to reach the target.
// 4. Check whether that number is already in the map.
// 5. If yes, return the previous index and current index.
// 6. Otherwise, store the current number and its index.
// 7. Continue until a solution is found.
