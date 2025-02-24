# Sorting Algorithms

##### 1. BubbleSort

```
/*----- Pseudocode for BubbleSort({array}) -----*/
/* 
Pre: array may be empty or contain comparable elements.
Post: array is sorted in ascending order.
*/
FUNCTION BubbleSort(array)
    n ← LENGTH(array)
    FOR i FROM 0 TO n - 1 DO
        swapped ← FALSE
        FOR j FROM 0 TO n - i - 2 DO
            IF array[j] > array[j + 1] THEN
                SWAP(array[j], array[j + 1])
                swapped ← TRUE
            END IF
        END FOR
        IF NOT swapped THEN
            BREAK  // Array is already sorted.
        END IF
    END FOR
    RETURN array
END FUNCTION
```

##### 2. SelectionSort

```
/*----- Pseudocode for SelectionSort({array}) -----*/
/* 
Pre: array may be empty or contain comparable elements.
Post: array is sorted in ascending order.
*/
FUNCTION SelectionSort(array)
    n ← LENGTH(array)
    FOR i FROM 0 TO n - 1 DO
        minIndex ← i
        FOR j FROM i + 1 TO n - 1 DO
            IF array[j] < array[minIndex] THEN
                minIndex ← j
            END IF
        END FOR
        IF minIndex ≠ i THEN
            SWAP(array[i], array[minIndex])
        END IF
    END FOR
    RETURN array
END FUNCTION
```

##### 3. InsertionSort

```
/*----- Pseudocode for InsertionSort({array}) -----*/
/* 
Pre: array may be empty or contain comparable elements.
Post: array is sorted in ascending order.
*/
FUNCTION InsertionSort(array)
    n ← LENGTH(array)
    FOR i FROM 1 TO n - 1 DO
        key ← array[i]
        j ← i - 1
        WHILE j ≥ 0 AND array[j] > key DO
            array[j + 1] ← array[j]
            j ← j - 1
        END WHILE
        array[j + 1] ← key
    END FOR
    RETURN array
END FUNCTION
```

##### 4. CountingSort

```
/*----- Pseudocode for CountingSort({array}) -----*/
/* 
Pre: array may be empty or contain non-negative integers.
Post: array is sorted in ascending order.
*/
FUNCTION CountingSort(array)
    IF LENGTH(array) = 0 THEN
        RETURN array
    END IF

    maxValue ← MAX(array)
    count ← ARRAY OF SIZE (maxValue + 1) INITIALIZED TO 0

    FOR i FROM 0 TO LENGTH(array) - 1 DO
        count[array[i]] ← count[array[i]] + 1
    END FOR

    FOR i FROM 1 TO maxValue DO
        count[i] ← count[i] + count[i - 1]
    END FOR

    output ← ARRAY OF SIZE LENGTH(array)
    FOR i FROM LENGTH(array) - 1 DOWNTO 0 DO
        output[count[array[i]] - 1] ← array[i]
        count[array[i]] ← count[array[i]] - 1
    END FOR

    FOR i FROM 0 TO LENGTH(array) - 1 DO
        array[i] ← output[i]
    END FOR

    RETURN array
END FUNCTION
```

##### 5. RadixSort

```
/*----- Pseudocode for RadixSort({array}) -----*/
/* 
Pre: array may be empty or contain non-negative integers.
Post: array is sorted in ascending order.
*/
FUNCTION RadixSort(array)
    maxValue ← MAX(array)
    exp ← 1
    WHILE maxValue / exp > 0 DO
        CALL CountingSortForRadix(array, exp)
        exp ← exp * 10
    END WHILE
    RETURN array
END FUNCTION

FUNCTION CountingSortForRadix(array, exp)
    n ← LENGTH(array)
    output ← ARRAY OF SIZE n INITIALIZED TO 0
    count ← ARRAY OF SIZE 10 INITIALIZED TO 0

    FOR i FROM 0 TO n - 1 DO
        digit ← (array[i] / exp) MOD 10
        count[digit] ← count[digit] + 1
    END FOR

    FOR i FROM 1 TO 9 DO
        count[i] ← count[i] + count[i - 1]
    END FOR

    FOR i FROM n - 1 DOWNTO 0 DO
        digit ← (array[i] / exp) MOD 10
        output[count[digit] - 1] ← array[i]
        count[digit] ← count[digit] - 1
    END FOR

    FOR i FROM 0 TO n - 1 DO
        array[i] ← output[i]
    END FOR
END FUNCTION
```

##### 6. BucketSort

```
/*----- Pseudocode for BucketSort({array}) -----*/
/* 
Pre: array may be empty or contain real numbers within a specific range.
Post: array is sorted in ascending order.
*/
FUNCTION BucketSort(array)
    IF LENGTH(array) = 0 THEN
        RETURN array
    END IF

    maxValue ← MAX(array)
    minValue ← MIN(array)
    bucketCount ← 10
    range ← (maxValue - minValue) / bucketCount
    buckets ← ARRAY OF SIZE bucketCount, EACH INITIALIZED TO AN EMPTY LIST

    FOR i FROM 0 TO LENGTH(array) - 1 DO
        index ← (array[i] - minValue) / range
        IF index = bucketCount THEN
            index ← bucketCount - 1
        END IF
        APPEND array[i] TO buckets[index]
    END FOR

    output ← EMPTY LIST
    FOR i FROM 0 TO bucketCount - 1 DO
        SORT(buckets[i])
        CONCATENATE buckets[i] TO output
    END FOR

    RETURN output
END FUNCTION
```

##### 7. ShellSort
```
/*----- Pseudocode for ShellSort({array}) -----*/
/* 
Pre: array may be empty or contain comparable elements.
Post: array is sorted in ascending order.
*/
FUNCTION ShellSort(array)
    n ← LENGTH(array)
    gap ← FLOOR(n / 2)
    WHILE gap > 0 DO
        FOR i FROM gap TO n - 1 DO
            temp ← array[i]
            j ← i
            WHILE j ≥ gap AND array[j - gap] > temp DO
                array[j] ← array[j - gap]
                j ← j - gap
            END WHILE
            array[j] ← temp
        END FOR
        gap ← FLOOR(gap / 2)
    END WHILE
    RETURN array
END FUNCTION
```

##### 8. MergeSort

```
/*----- Pseudocode for MergeSort({array}) -----*/
/* 
Pre: array may be empty or contain comparable elements.
Post: array is sorted in ascending order.
*/
FUNCTION MergeSort(array)
    IF LENGTH(array) ≤ 1 THEN
        RETURN array
    END IF

    mid ← FLOOR(LENGTH(array) / 2)
    left ← MergeSort(array[0 .. mid - 1])
    right ← MergeSort(array[mid .. LENGTH(array) - 1])
    RETURN Merge(left, right)
END FUNCTION

FUNCTION Merge(left, right)
    result ← EMPTY LIST
    WHILE left IS NOT EMPTY AND right IS NOT EMPTY DO
        IF FIRST(left) < FIRST(right) THEN
            APPEND FIRST(left) TO result
            REMOVE FIRST(left)
        ELSE
            APPEND FIRST(right) TO result
            REMOVE FIRST(right)
        END IF
    END WHILE
    APPEND REMAINING ELEMENTS OF left TO result
    APPEND REMAINING ELEMENTS OF right TO result
    RETURN result
END FUNCTION
```

##### 9. NonInPlaceQuickSort

```
// NonInPlaceQuickSort({ array = [] })
/* 
Pre: array may be empty or contain comparable elements.
Post: array is sorted in ascending order.
*/
FUNCTION NonInPlaceQuickSort(array)
    CALL QuickSort(array, 0, LENGTH(array) - 1)
    RETURN array
END FUNCTION

FUNCTION QuickSort(array, low, high)
    IF low < high THEN
        pivotIndex ← Partition(array, low, high)
        CALL QuickSort(array, low, pivotIndex - 1)
        CALL QuickSort(array, pivotIndex + 1, high)
    END IF
END FUNCTION

FUNCTION Partition(array, low, high)
    pivot ← array[high]
    i ← low - 1
    FOR j FROM low TO high - 1 DO
        IF array[j] < pivot THEN
            i ← i + 1
            SWAP(array[i], array[j])
        END IF
    END FOR
    SWAP(array[i + 1], array[high])
    RETURN i + 1
END FUNCTION
```

##### 10. InPlaceQuickSort

```
/*----- Pseudocode for InPlaceQuickSort({array}) -----*/
/* 
Pre: array may be empty or contain comparable elements.
Post: array is sorted in ascending order.
*/
FUNCTION InPlaceQuickSort(array)
    CALL QuickSortInPlace(array, 0, LENGTH(array) - 1)
    RETURN array
END FUNCTION

FUNCTION QuickSortInPlace(array, low, high)
    IF low < high THEN
        pivotIndex ← Partition(array, low, high)
        CALL QuickSortInPlace(array, low, pivotIndex - 1)
        CALL QuickSortInPlace(array, pivotIndex + 1, high)
    END IF
END FUNCTION

FUNCTION Partition(array, low, high)
    pivot ← array[high]
    i ← low - 1
    FOR j FROM low TO high - 1 DO
        IF array[j] < pivot THEN
            i ← i + 1
            SWAP(array[i], array[j])
        END IF
    END FOR
    SWAP(array[i + 1], array[high])
    RETURN i + 1
END FUNCTION
```

##### 11. HeapSort

```
/*----- Pseudocode for HeapSort({array}) -----*/
/* 
Pre: array may be empty or contain comparable elements.
Post: array is sorted in ascending order.
*/
FUNCTION HeapSort(array)
    n ← LENGTH(array)
    // Build a max heap.
    FOR i FROM FLOOR(n / 2) - 1 DOWNTO 0 DO
        CALL Heapify(array, n, i)
    END FOR

    // Extract elements from heap one by one.
    FOR i FROM n - 1 DOWNTO 1 DO
        SWAP(array[0], array[i])
        CALL Heapify(array, i, 0)
    END FOR

    RETURN array
END FUNCTION

FUNCTION Heapify(array, heapSize, i)
    largest ← i
    left ← 2 * i + 1
    right ← 2 * i + 2

    IF left < heapSize AND array[left] > array[largest] THEN
        largest ← left
    END IF
    IF right < heapSize AND array[right] > array[largest] THEN
        largest ← right
    END IF
    IF largest ≠ i THEN
        SWAP(array[i], array[largest])
        CALL Heapify(array, heapSize, largest)
    END IF
END FUNCTION
```
