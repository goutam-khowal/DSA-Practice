# Sorting Algorithms

##### 1. BubbleSort

```
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
```

##### 2. SelectionSort

```
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
```

##### 3. InsertionSort

```
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
```

##### 4. CountingSort

```
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
```

##### 5. RadixSort

```
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
```

##### 6. BucketSort

```
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
```

##### 7. ShellSort

```
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
```

##### 8. MergeSort

```
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
```

##### 9. NonInPlaceQuickSort

```
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
```

##### 10. InPlaceQuickSort

```
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
```

##### 11. HeapSort

```
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
```
