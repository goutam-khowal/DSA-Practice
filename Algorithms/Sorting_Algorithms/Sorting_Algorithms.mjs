//* BubbleSort() */
/*----- Pseudocode for BubbleSort({array}) -----*/
// BubbleSort({ array = [] })
// Pre: The array may be empty or contain elements
// Post: The array is sorted in ascending order
// SET n ← LENGTH(array)
// FOR i FROM 0 TO n - 1 DO
//     swapped ← false
//     FOR j FROM 0 TO n - i - 2 DO
//         IF array[j] > array[j + 1] THEN
//             SWAP array[j] WITH array[j + 1]
//             swapped ← true
//         END IF
//     END FOR
//     IF NOT swapped THEN
//         BREAK // Array is already sorted
//     END IF
// END FOR
// end BubbleSort

function bubbleSort({ array = [] }) {
  const n = array.length;
  for (let i = 0; i <= n - 1; i++) {
    let swapped = false;
    for (let j = 0; j <= n - i - 1; j++) {
      if (array[i] > array[j + 1]) {
        array[j] = array[j + 1];
        swapped = true;
      }
    }
    if (swapped == true) {
      break;
    }
  }
}

//* SelectionSort() */
/*----- Pseudocode for SelectionSort({array}) -----*/
// SelectionSort({ array = [] })
// Pre: The array may be empty or contain elements
// Post: The array is sorted in ascending order
// SET n ← LENGTH(array)
// FOR i FROM 0 TO n - 1 DO
//     minIndex ← i
//     FOR j FROM i + 1 TO n - 1 DO
//         IF array[j] < array[minIndex] THEN
//             minIndex ← j
//         END IF
//     END FOR
//     // Swap the found minimum element with the first element of the unsorted part
//     IF minIndex ≠ i THEN
//         SWAP array[i] WITH array[minIndex]
//     END IF
// END FOR
// end SelectionSort

function selectionSort({ array = [] }) {
  const n = array.length;
  for (let i = 0; i <= n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j <= n - 1; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = array[minIndex];
      array[minIndex] = array[i];
      array[i] = temp;
    }
  }
}

//* InsertionSort() */
/*----- Pseudocode for InsertionSort({array}) -----*/
// InsertionSort({ array = [] })
// Pre: The array may be empty or contain elements
// Post: The array is sorted in ascending order
// SET n ← LENGTH(array)
// FOR i FROM 1 TO n - 1 DO
//     key ← array[i] // The element to be inserted
//     j ← i - 1 // Index of the last sorted element
//     // Move elements of array[0..i-1] that are greater than key
//     WHILE j >= 0 AND array[j] > key DO
//         array[j + 1] ← array[j] // Shift element to the right
//         j ← j - 1
//     END WHILE
//     array[j + 1] ← key // Insert the key at the correct position
// END FOR
// end InsertionSort

function insertionSort({ array = [] }) {
  const n = array.length;
  for (let i = 0; i <= n - 1; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
}

//* CountingSort() */
/*----- Pseudocode for CountingSort({array}) -----*/
// CountingSort({ array = [] })
// Pre: The array may be empty or contain non-negative integers
// Post: The array is sorted in ascending order

// FUNCTION countingSort(array)
//     IF LENGTH(array) = 0 THEN
//         RETURN array // If the array is empty, return it as is

//     maxValue ← MAX(array) // Find the maximum value in the array
//     count ← ARRAY OF SIZE (maxValue + 1) INITIALIZED TO 0 // Create count array

//     // Count the occurrences of each value in the input array
//     FOR i FROM 0 TO LENGTH(array) - 1 DO
//         count[array[i]] ← count[array[i]] + 1
//     END FOR

//     // Modify the count array to store the cumulative count
//     FOR i FROM 1 TO maxValue DO
//         count[i] ← count[i] + count[i - 1]
//     END FOR

//     output ← ARRAY OF SIZE LENGTH(array) // Create output array

//     // Build the output array
//     FOR i FROM LENGTH(array) - 1 DOWNTO 0 DO
//         output[count[array[i]] - 1] ← array[i] // Place the element in the output array
//         count[array[i]] ← count[array[i]] - 1 // Decrease the count for the current element
//     END FOR

//     // Copy the sorted elements back into the original array
//     FOR i FROM 0 TO LENGTH(array) - 1 DO
//         array[i] ← output[i]
//     END FOR

//     RETURN array // The array is now sorted
// END FUNCTION

// end CountingSort

function CountingSort({ array = [] }) {
  if (array.length === 0) {
    return array;
  }

  const maxValue = Math.max(...array);
  const count = new Array(maxValue + 1).fill(0);

  for (let i = 0; i < array.length; i++) {
    count[array[i]]++;
  }

  for (let i = 1; i <= maxValue; i++) {
    count[i] += count[i - 1];
  }

  const output = new Array(array.length);

  for (let i = array.length - 1; i >= 0; i--) {
    output[count[array[i]] - 1] = array[i];
    count[array[i]]--;
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = output[i];
  }

  return array;
}

//* RadixSort() */
/*----- Pseudocode for RadixSort({array}) -----*/
// RadixSort({ array = [] })
// Pre: The array may be empty or contain non-negative integers
// Post: The array is sorted in ascending order

// FUNCTION countingSortForRadix(array, exp)
//     n ← LENGTH(array)
//     output ← ARRAY OF SIZE n INITIALIZED TO 0 // Output array
//     count ← ARRAY OF SIZE 10 INITIALIZED TO 0 // Count array for digits (0-9)

//     FOR i FROM 0 TO n - 1 DO
//         index ← (array[i] / exp) MOD 10 // Get the digit at the current place value
//         count[index] ← count[index] + 1
//     END FOR

//     FOR i FROM 1 TO 9 DO
//         count[i] ← count[i] + count[i - 1]
//     END FOR

//     FOR i FROM n - 1 DOWNTO 0 DO
//         index ← (array[i] / exp) MOD 10
//         output[count[index] - 1] ← array[i]
//         count[index] ← count[index] - 1
//     END FOR

//     FOR i FROM 0 TO n - 1 DO
//         array[i] ← output[i]
//     END FOR

// END FUNCTION

// FUNCTION RadixSort(array)
//     maxValue ← MAX(array) // Find the maximum number to determine the number of digits
//     exp ← 1 // Initialize the exponent (1 for the least significant digit)

//     WHILE maxValue / exp > 0 DO
//         countingSortForRadix(array, exp) // Sort based on the current digit
//         exp ← exp * 10 // Move to the next digit
//     END WHILE

//     RETURN array // The array is now sorted
// END FUNCTION

// end RadixSort

function RadixSort({ array = [] }) {
  function countingSortForRadix(array, exp) {
    const n = array.length;
    const output = new Array(n);
    const count = new Array(10).fill(0);

    for (let i = 0; i < n; i++) {
      const index = Math.floor(array[i] / exp) % 10;
      count[index]++;
    }

    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
      const index = Math.floor(array[i] / exp) % 10;
      output[count[index] - 1] = array[i];
      count[index]--;
    }

    for (let i = 0; i < n; i++) {
      array[i] = output[i];
    }
  }

  const maxValue = Math.max(...array);
  let exp = 1;

  while (Math.floor(maxValue / exp) > 0) {
    countingSortForRadix(array, exp);
    exp *= 10;
  }

  return array; // The array is now sorted
}

//* BucketSort() */
/*----- Pseudocode for BucketSort({array}) -----*/
// BucketSort({ array = [] })
// Pre: The array may be empty or contain real numbers in a specific range
// Post: The array is sorted in ascending order

// FUNCTION bucketSort(array)
//     IF LENGTH(array) = 0 THEN
//         RETURN array // If the array is empty, return it as is

//     maxValue ← MAX(array) // Find the maximum value in the array
//     minValue ← MIN(array) // Find the minimum value in the array
//     bucketCount ← 10 // Number of buckets
//     range ← (maxValue - minValue) / bucketCount // Range of each bucket
//     buckets ← ARRAY OF SIZE bucketCount INITIALIZED TO EMPTY LISTS // Create buckets

//     // Distribute the elements into buckets
//     FOR i FROM 0 TO LENGTH(array) - 1 DO
//         index ← (array[i] - minValue) / range // Determine the bucket index
//         IF index = bucketCount THEN
//             index ← bucketCount - 1 // Handle the case where the element is the max value
//         END IF
//         APPEND array[i] TO buckets[index] // Place the element in the appropriate bucket
//     END FOR

//     // Sort each bucket and concatenate the results
//     output ← [] // Initialize the output array
//     FOR i FROM 0 TO bucketCount - 1 DO
//         SORT buckets[i] // Sort the individual bucket (using any sorting algorithm, e.g., Insertion Sort)
//         APPEND buckets[i] TO output // Concatenate the sorted bucket to the output
//     END FOR

//     RETURN output // The array is now sorted
// END FUNCTION

// end BucketSort

function BucketSort({ array = [] }) {
  if (array.length === 0) {
    return array;
  }

  const maxValue = Math.max(...array);
  const minValue = Math.min(...array);
  const bucketCount = 10;
  const range = (maxValue - minValue) / bucketCount;
  const buckets = Array.from({ length: bucketCount }, () => []);

  for (let i = 0; i < array.length; i++) {
    const index = Math.floor((array[i] - minValue) / range);
    if (index === bucketCount) {
      buckets[bucketCount - 1].push(array[i]);
    } else {
      buckets[index].push(array[i]);
    }
  }

  const output = [];
  for (let i = 0; i < bucketCount; i++) {
    const sortedBucket = buckets[i].sort((a, b) => a - b);
    output.push(...sortedBucket);
  }

  return output; // The array is now sorted
}

//* ShellSort() */
/*----- Pseudocode for ShellSort({array}) -----*/
// ShellSort({ array = [] })
// Pre: The array may be empty or contain comparable elements
// Post: The array is sorted in ascending order

// FUNCTION shellSort(array)
//     n ← LENGTH(array)
//     gap ← n / 2 // Start with a big gap, then reduce the gap
//     WHILE gap > 0 DO
//         FOR i FROM gap TO n - 1 DO
//             temp ← array[i] // The current element to be positioned
//             j ← i
//             WHILE j >= gap AND array[j - gap] > temp DO
//                 array[j] ← array[j - gap] // Move the element to the right
//                 j ← j - gap
//             END WHILE
//             array[j] ← temp // Place temp in its correct location
//         END FOR
//         gap ← gap / 2 // Reduce the gap
//     END WHILE
// END FUNCTION

// FUNCTION ShellSort(array)
//     shellSort(array)
//     RETURN array // The array is now sorted
// END FUNCTION

// end ShellSort

function ShellSort({ array = [] }) {
  function shellSort(array) {
    const n = array.length;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
      for (let i = gap; i < n; i++) {
        const temp = array[i];
        let j = i;

        while (j >= gap && array[j - gap] > temp) {
          array[j] = array[j - gap];
          j -= gap;
        }
        array[j] = temp;
      }
      gap = Math.floor(gap / 2);
    }
  }

  shellSort(array);
  return array; // The array is now sorted
}

//* MergeSort() - Non In Place*/
/*----- Pseudocode for MergeSort({array}) -----*/
// MergeSort({ array = [] })
// Pre: The array may be empty or contain elements
// Post: The array is sorted in ascending order

// FUNCTION merge(left, right)
//     result ← [] // Initialize an empty result array
//     WHILE left IS NOT EMPTY AND right IS NOT EMPTY DO
//         IF left[0] < right[0] THEN
//             APPEND left[0] TO result // Add the smaller element to result
//             REMOVE left[0] FROM left // Remove the element from left
//         ELSE
//             APPEND right[0] TO result // Add the smaller element to result
//             REMOVE right[0] FROM right // Remove the element from right
//         END IF
//     END WHILE
//     APPEND left TO result // Append any remaining elements in left
//     APPEND right TO result // Append any remaining elements in right
//     RETURN result // Return the merged result
// END FUNCTION

// FUNCTION mergeSort(array)
//     IF LENGTH(array) <= 1 THEN
//         RETURN array // Base case: array is already sorted
//     mid ← LENGTH(array) / 2 // Find the midpoint
//     left ← mergeSort(array[0..mid - 1]) // Recursively sort the left half
//     right ← mergeSort(array[mid..LENGTH(array) - 1]) // Recursively sort the right half
//     RETURN merge(left, right) // Merge the sorted halves
// END FUNCTION

// end MergeSort

function MergeSort({ array = [] }) {
  function merge(left, right) {
    const result = [];
    while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        result.push(left[0]);
        left.splice(0, 1);
      } else {
        result.push(right[0]);
        right.splice(0, 1);
      }
    }
    result.push(...left);
    result.push(...right);
    return result;
  }

  function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));
    return merge(left, right);
  }

  return mergeSort(array);
}

//* NonInPlaceQuickSort() */
/*----- Pseudocode for NonInPlaceQuickSort({array}) -----*/
// NonInPlaceQuickSort({ array = [] })
// Pre: The array may be empty or contain comparable elements
// Post: The array is sorted in ascending order

// FUNCTION partition(array, low, high)
//     pivot ← array[high] // Choose the last element as pivot
//     i ← low - 1 // Index of smaller element
//     FOR j FROM low TO high - 1 DO
//         IF array[j] < pivot THEN
//             i ← i + 1
//             SWAP array[i] WITH array[j]
//         END IF
//     END FOR
//     SWAP array[i + 1] WITH array[high] // Place pivot in the correct position
//     RETURN i + 1 // Return the partitioning index
// END FUNCTION

// FUNCTION quickSort(array, low, high)
//     IF low < high THEN
//         pi ← partition(array, low, high) // Partitioning index
//         quickSort(array, low, pi - 1) // Recursively sort elements before partition
//         quickSort(array, pi + 1, high) // Recursively sort elements after partition
//     END IF
// END FUNCTION

// FUNCTION NonInPlaceQuickSort(array)
//     quickSort(array, 0, LENGTH(array) - 1)
//     RETURN array // The array is now sorted
// END FUNCTION

// end NonInPlaceQuickSort

function NonInPlaceQuickSort({ array = [] }) {
  function partition(array, low, high) {
    const pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (array[j] < pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      }
    }
    [array[i + 1], array[high]] = [array[high], array[i + 1]]; // Place pivot in the correct position
    return i + 1; // Return the partitioning index
  }

  function quickSort(array, low, high) {
    if (low < high) {
      const pi = partition(array, low, high);
      quickSort(array, low, pi - 1);
      quickSort(array, pi + 1, high);
    }
  }

  quickSort(array, 0, array.length - 1);
  return array; // The array is now sorted
}

//* InPlaceQuickSort() */
/*----- Pseudocode for InPlaceQuickSort({array}) -----*/
// InPlaceQuickSort({ array = [] })
// Pre: The array may be empty or contain comparable elements
// Post: The array is sorted in ascending order

// FUNCTION partition(array, low, high)
//     pivot ← array[high] // Choose the last element as pivot
//     i ← low - 1 // Index of smaller element
//     FOR j FROM low TO high - 1 DO
//         IF array[j] < pivot THEN
//             i ← i + 1
//             SWAP array[i] WITH array[j]
//         END IF
//     END FOR
//     SWAP array[i + 1] WITH array[high] // Place pivot in the correct position
//     RETURN i + 1 // Return the partitioning index
// END FUNCTION

// FUNCTION quickSort(array, low, high)
//     IF low < high THEN
//         pi ← partition(array, low, high) // Partitioning index
//         quickSort(array, low, pi - 1) // Recursively sort elements before partition
//         quickSort(array, pi + 1, high) // Recursively sort elements after partition
//     END IF
// END FUNCTION

// FUNCTION InPlaceQuickSort(array)
//     quickSort(array, 0, LENGTH(array) - 1)
//     RETURN array // The array is now sorted
// END FUNCTION

// end InPlaceQuickSort

function InPlaceQuickSort({ array = [] }) {
  function partition(array, low, high) {
    const pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (array[j] < pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      }
    }
    [array[i + 1], array[high]] = [array[high], array[i + 1]]; // Place pivot in the correct position
    return i + 1; // Return the partitioning index
  }

  function quickSort(array, low, high) {
    if (low < high) {
      const pi = partition(array, low, high); // Partitioning index
      quickSort(array, low, pi - 1); // Recursively sort elements before partition
      quickSort(array, pi + 1, high); // Recursively sort elements after partition
    }
  }

  quickSort(array, 0, array.length - 1);
  return array; // The array is now sorted
}

//* HeapSort() */
/*----- Pseudocode for HeapSort({array}) -----*/
// HeapSort({ array = [] })
// Pre: The array may be empty or contain elements
// Post: The array is sorted in ascending order

// FUNCTION heapify(array, n, i)
//     largest ← i // Initialize largest as root
//     left ← 2 * i + 1 // Left child index
//     right ← 2 * i + 2 // Right child index
//     // Check if left child exists and is greater than root
//     IF left < n AND array[left] > array[largest] THEN
//         largest ← left
//     END IF
//     // Check if right child exists and is greater than largest so far
//     IF right < n AND array[right] > array[largest] THEN
//         largest ← right
//     END IF
//     // If largest is not root, swap and continue heapifying
//     IF largest ≠ i THEN
//         SWAP array[i] WITH array[largest]
//         CALL heapify(array, n, largest)
//     END IF
// END FUNCTION

// SET n ← LENGTH(array)
// // Build a max heap
// FOR i FROM n / 2 - 1 DOWNTO 0 DO
//     CALL heapify(array, n, i)
// END FOR
// // One by one extract elements from heap
// FOR i FROM n - 1 DOWNTO 1 DO
//     SWAP array[0] WITH array[i] // Move current root to end
//     CALL heapify(array, i, 0) // Call max heapify on the reduced heap
// END FOR
// end HeapSort

function heapSort({ array = [] }) {
  function heapify(array, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && array[left] > array[largest]) {
      largest = left;
    }
    if (right < n && array[right] > array[largest]) {
      largest = right;
    }
    if (largest !== i) {
      const temp = array[i];
      array[i] = array[largest];
      array[largest] = temp;
      heapify(array, n, largest);
    }
  }

  const n = array.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i);
  }
  for (let i = n - 1; i >= 1; i--) {
    const temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    heapify(array, i, 0);
  }
}

// USING ALL SORTS OF SORT🗿

const baseArray = [
  1, 2, 3, 4, 6, 6, 4, 9, 5, 9, 5, 22, 1, 5, 4, 6, 97, 5, 59, 15, 98, 71,
];
console.log("\n------------------------------------\n");
const bubbleArray = [...baseArray];
bubbleSort({ array: bubbleArray });
console.log("Bubble Sort:", bubbleArray);
console.log("\n------------------------------------\n");
const selectionArray = [...baseArray];
selectionSort({ array: selectionArray });
console.log("Selection Sort:", selectionArray);
console.log("\n------------------------------------\n");
const insertionArray = [...baseArray];
insertionSort({ array: insertionArray });
console.log("Insertion Sort:", insertionArray);
console.log("\n------------------------------------\n");
const countingArray = [...baseArray];
CountingSort({ array: countingArray });
console.log("Counting Sort:", countingArray);
console.log("\n------------------------------------\n");
const radixArray = [...baseArray];
RadixSort({ array: radixArray });
console.log("Radix Sort:", radixArray);
console.log("\n------------------------------------\n");
const bucketArray = [...baseArray];
const sortedBucketArray = BucketSort({ array: bucketArray });
console.log("Bucket Sort:", sortedBucketArray);
console.log("\n------------------------------------\n");
const shellArray = [...baseArray];
ShellSort({ array: shellArray });
console.log("Shell Sort:", shellArray);
console.log("\n------------------------------------\n");
const mergeArray = [...baseArray];
const sortedMergeArray = MergeSort({ array: mergeArray });
console.log("Merge Sort:", sortedMergeArray);
console.log("\n------------------------------------\n");
const nonInPlaceQuickArray = [...baseArray];
NonInPlaceQuickSort({ array: nonInPlaceQuickArray });
console.log("Non In-Place Quick Sort:", nonInPlaceQuickArray);
console.log("\n------------------------------------\n");
const inPlaceQuickArray = [...baseArray];
InPlaceQuickSort({ array: inPlaceQuickArray });
console.log("In-Place Quick Sort:", inPlaceQuickArray);
console.log("\n------------------------------------\n");
const heapArray = [...baseArray];
heapSort({ array: heapArray });
console.log("Heap Sort:", heapArray);
console.log("\n------------------------------------\n");
