# Searching Algorithms

##### 1. Linear Search

```
// Pseudocode for LinearSearch
LinearSearch(array, target)
Pre: The array may be empty or contain elements
Post: Returns the index of the first occurrence of the target value, or -1 if not found

// If the array is empty, return -1
IF array IS empty THEN
    RETURN -1 // Array is empty, target cannot be found
END IF

// Iterate through each element in the array
FOR i FROM 0 TO LENGTH(array) - 1 DO
    // Check if the current element is equal to the target
    IF array[i] == target THEN
        RETURN i // Target found at index i
    END IF
END FOR

RETURN -1 // Target not found in the array
end LinearSearch
```

##### 2. Binary Search

```
// Pseudocode for BinarySearch
BinarySearch(array, target)
Pre: The array must be sorted in ascending order
Post: Returns the index of the target value if found, or -1 if not found

// If the array is empty, return -1
IF array IS empty THEN
    RETURN -1 // Array is empty
END IF

left ← 0
right ← LENGTH(array) - 1

// While there are elements to search
WHILE left <= right DO
    mid ← (left + right) / 2 // Calculate the mid index

    // Check if the target is found at mid
    IF array[mid] == target THEN
        RETURN mid // Target found
    END IF

    // Adjust the search range based on the comparison
    IF array[mid] < target THEN
        left ← mid + 1 // Search in the right half
    ELSE
        right ← mid - 1 // Search in the left half
    END IF
END WHILE

RETURN -1 // Target not found
end BinarySearch
```

##### 3. Jump Search

```
// Pseudocode for JumpSearch
JumpSearch(array, target)
Pre: The array must be sorted in ascending order
Post: Returns the index of the target value if found, or -1 if not found

// If the array is empty, return -1
IF array IS empty THEN
    RETURN -1 // Array is empty
END IF

n ← LENGTH(array)
jump ← √n // Optimal jump size
prev ← 0

// Jump search phase
WHILE array[min(jump, n) - 1] < target DO
    prev ← jump
    jump ← jump + √n
    // If prev exceeds the array length, target is not found
    IF prev >= n THEN
        RETURN -1 // Target not found
    END IF
END WHILE

// Linear search in the identified block
FOR i FROM prev TO MIN(jump, n) - 1 DO
    IF array[i] == target THEN
        RETURN i // Target found
    END IF
END FOR

RETURN -1 // Target not found
end JumpSearch
```

##### 4. Interpolation Search

```
// Pseudocode for InterpolationSearch
InterpolationSearch(array, target)
Pre: The array must be sorted in ascending order
Post: Returns the index of the target value if found, or -1 if not found

// If the array is empty, return -1
IF array IS empty THEN
    RETURN -1 // Array is empty
END IF

low ← 0
high ← LENGTH(array) - 1

// While there are elements to search
WHILE low <= high AND target >= array[low] AND target <= array[high] DO
    // Estimate the position of the target
    pos ← low + ((target - array[low]) * (high - low)) / (array[high] - array[low])

    // Check if the target is found at the estimated position
    IF array[pos] == target THEN
        RETURN pos // Target found
    END IF

    // Adjust the search range based on the comparison
    IF array[pos] < target THEN
        low ← pos + 1 // Search in the right half
    ELSE
        high ← pos - 1 // Search in the left half
    END IF
END WHILE

RETURN -1 // Target not found
end InterpolationSearch
```
