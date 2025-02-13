class SearchAlgo {
  //* LinearSearch() */
  /*----- Pseudocode for LinearSearch({array, target}) -----*/
  // LinearSearch({ array = [], target = undefined })
  // Pre: The array may be empty or contain elements
  // Post: Returns the index of the first occurrence of the target value, or -1 if not found
  // IF array IS empty THEN
  //     RETURN -1 // Array is empty, target cannot be found
  // END IF
  // FOR i FROM 0 TO LENGTH(array) - 1 DO
  //     // Check if the current element is equal to the target
  //     IF array[i] == target THEN
  //         // If a match is found, return the index of the target
  //         RETURN i  // Target found at index i
  //     END IF
  // END FOR
  // RETURN -1  // Target not found in the array
  // end LinearSearch

  LinearSearch(arr = [], target = undefined) {
    if (arr.length == 0) {
      return -1;
    }
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }

  //* BinarySearch() */
  /*----- Pseudocode for BinarySearch({array, target}) -----*/
  // BinarySearch({ array = [], target = undefined })
  // Pre: The array must be sorted in ascending order
  // Post: Returns the index of the target value if found, or -1 if not found
  // IF array IS empty THEN
  //     RETURN -1 // Array is empty
  // END IF
  // left ← 0
  // right ← LENGTH(array) - 1
  // WHILE left <= right DO
  //     mid ← (left + right) / 2
  //     IF array[mid] == target THEN
  //         RETURN mid  // Target found
  //     END IF
  //     IF array[mid] < target THEN
  //         left ← mid + 1  // Search right half
  //     ELSE
  //         right ← mid - 1  // Search left half
  //     END IF
  // END WHILE
  // RETURN -1  // Target not found
  // end BinarySearch

  BinarySearch(arr = [], target = undefined) {
    if (arr.length === 0) {
      return -1;
    }
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        return mid;
      }
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }

  //* JumpSearch() */
  /*----- Pseudocode for JumpSearch({array, target}) -----*/
  // JumpSearch({ array = [], target = undefined })
  // Pre: The array must be sorted in ascending order
  // Post: Returns the index of the target value if found, or -1 if not found
  // IF array IS empty THEN
  //     RETURN -1 // Array is empty
  // END IF
  // n ← LENGTH(array)
  // jump ← √n  // Optimal jump size
  // prev ← 0
  // WHILE array[min(jump, n) - 1] < target DO
  //     prev ← jump
  //     jump ← jump + √n
  //     IF prev >= n THEN
  //         RETURN -1 // Target not found
  //     END IF
  // END WHILE
  // // Linear search in the block
  // FOR i FROM prev TO MIN(jump, n) - 1 DO
  //     IF array[i] == target THEN
  //         RETURN i  // Target found
  //     END IF
  // END FOR
  // RETURN -1  // Target not found
  // end JumpSearch

  JumpSearch(arr = [], target = undefined) {
    if (arr.length === 0) {
      return -1;
    }

    const length = arr.length;
    const jump = Math.floor(Math.sqrt(length));
    let prev = 0;

    while (arr[Math.min(jump, length) - 1] < target) {
      prev = jump;
      jump += Math.floor(Math.sqrt(length));
      if (prev >= length) {
        return -1;
      }
    }

    for (let i = prev; i < Math.min(jump, length); i++) {
      if (arr[i] === target) {
        return i;
      }
    }

    return -1;
  }

  //* InterpolationSearch() */
  /*----- Pseudocode for InterpolationSearch({array, target}) -----*/
  // InterpolationSearch({ array = [], target = undefined })
  // Pre: The array must be sorted in ascending order
  // Post: Returns the index of the target value if found, or -1 if not found
  // IF array IS empty THEN
  //     RETURN -1 // Array is empty
  // END IF
  // low ← 0
  // high ← LENGTH(array) - 1
  // WHILE low <= high AND target >= array[low] AND target <= array[high] DO
  //     // Estimate the position of the target
  //     pos ← low + ((target - array[low]) * (high - low)) / (array[high] - array[low])
  //     IF array[pos] == target THEN
  //         RETURN pos  // Target found
  //     END IF
  //     IF array[pos] < target THEN
  //         low ← pos + 1  // Search in the right half
  //     ELSE
  //         high ← pos - 1  // Search in the left half
  //     END IF
  // END WHILE
  // RETURN -1  // Target not found
  // end InterpolationSearch
  InterpolationSearch(arr = [], target = undefined) {
    if (arr.length === 0) {
      return -1;
    }

    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      const pos =
        low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low]);
      if (arr[pos] === target) {
        return pos;
      }

      if (arr[pos] < target) {
        low = pos + 1;
      } else {
        high = pos - 1;
      }
    }
    return -1;
  }
}

const search = new SearchAlgo();
const start = new Date();
const end = new Date();

console.log(search.LinearSearch([1, 2, 3, 6, 4, 8, 9, 80, 1, 1, 20], 1));
console.log(search.BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
