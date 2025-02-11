# Doubly Linked List Operations Pseudocodes

##### 1. Append (Add at End)
```
// Pseudocode for Append
Append(value)
Pre: value is the value to add to the end of the doubly linked list
Post: A new node with the given value is added at the tail of the list
newNode ← new DoublyLinkedListNode(value) // Create a new node with the given value

// If there is no head yet, make the new node the head and tail
if this.head = null THEN
    this.head ← newNode // Set head to the new node
    this.tail ← newNode // Set tail to the new node
    RETURN this // Return the updated doubly linked list instance
END IF

// Attach the new node to the end of the linked list
this.tail.next ← newNode // Link the current tail to the new node

// Attach the current tail to the new node's previous reference
newNode.previous ← this.tail // Set the previous reference of the new node

// Set the new node to be the tail of the linked list
this.tail ← newNode // Update the tail to the new node

RETURN this // Return the updated doubly linked list instance
end Append
```

#### 2. Prepend (Add at Head/Beginning)
```
// Pseudocode for Prepend
Prepend(value)
Pre: value is the value to add to the front of the doubly linked list
Post: A new node with the given value is added at the head of the list
newNode ← new DoublyLinkedListNode(value, this.head, null) // Create a new node

IF this.head ≠ null THEN
    this.head.previous ← newNode // Update previous reference of the current head
END IF

this.head ← newNode // Update the head to be the new node

IF this.tail = null THEN
    this.tail ← newNode // Set the new node as the tail if the list was empty
END IF

RETURN this // Return the updated doubly linked list instance
end Prepend
```
#### 3. Traverse the List
```
// Pseudocode for Traversal
Traverse()
Pre: The doubly linked list may be empty or contain nodes
Post: Processes each node's value in the list

currentNode ← this.head // Start from the head of the list

// Traverse the linked list
WHILE currentNode ≠ null DO
    // Process the current node's value (e.g., print or store it)
    PROCESS(currentNode.value) // Replace with actual processing logic

    currentNode ← currentNode.next // Move to the next node
END WHILE

RETURN // End of traversal
end Traverse
```
#### 4. Reverse Traverse the List 
```
// Pseudocode for ReverseTraversal
ReverseTraverse()
Pre: The doubly linked list may be empty or contain nodes
Post: Processes each node's value in reverse order

currentNode ← this.tail // Start from the tail of the list

// Traverse the linked list in reverse
WHILE currentNode ≠ null DO
    // Process the current node's value (e.g., print or store it)
    PROCESS(currentNode.value) // Replace with actual processing logic

    currentNode ← currentNode.previous // Move to the previous node
END WHILE

RETURN // End of reverse traversal
end ReverseTraverse
```
#### 5. Remove a Value
```
// Pseudocode for Delete(value)
Delete(value)
Pre: value is the value to remove from the doubly linked list
Post: Returns the deleted node if found, otherwise null
if head = null
    return null // List is empty
end if

currentNode ← head // Start from the head
while currentNode ≠ null do
    if currentNode.value = value then
        // If deleting the head node
        if currentNode = head then
            head ← head.next // Update head
            if head ≠ null then
                head.previous ← null // Update new head's previous
            end if
        // If deleting the tail node
        else if currentNode = tail then
            tail ← tail.previous // Update tail
            tail.next ← null // Remove link to deleted node
        else
            // Deleting a middle node
            previousNode ← currentNode.previous
            nextNode ← currentNode.next
            previousNode.next ← nextNode // Link previous to next
            if nextNode ≠ null then
                nextNode.previous ← previousNode // Link next to previous
            end if
        end if
        return currentNode // Return the deleted node
    end if
    currentNode ← currentNode.next // Move to the next node
end while

return null // Value not found
end Delete
```
#### 6. Delete Head Node 
```
// Pseudocode for DeleteHead()
DeleteHead()
Pre: The doubly linked list may be empty or contain nodes
Post: Removes the head node from the list and returns it, or returns null if the list is empty

// Check if the list is empty
IF this.head = null THEN
    RETURN null // No head to delete
END IF

deletedHead ← this.head // Store the head node to return

// Check if there is more than one node in the list
IF this.head.next ≠ null THEN
    this.head ← this.head.next // Move head pointer to the next node
    this.head.previous ← null // Set the new head's previous reference to null
ELSE
    // If there is only one node in the list
    this.head ← null // Set head to null
    this.tail ← null // Set tail to null
END IF

RETURN deletedHead // Return the deleted head node
end DeleteHead
```
#### 7. Delete Tail Node 
```
// Pseudocode for DeleteTail()
DeleteTail()
Pre: The doubly linked list may be empty or contain nodes
Post: Removes the tail node from the list and returns it, or returns null if the list is empty

// Check if there is no tail to delete
IF this.tail = null THEN
    RETURN null // No tail to delete
END IF

// Check if there is only one node in the linked list
IF this.head = this.tail THEN
    deletedTail ← this.tail // Store the tail node to return
    this.head ← null // Set head to null
    this.tail ← null // Set tail to null
    RETURN deletedTail // Return the deleted tail node
END IF

// If there are multiple nodes in the linked list
deletedTail ← this.tail // Store the tail node to return
this.tail ← this.tail.previous // Move the tail pointer to the previous node
this.tail.next ← null // Set the new tail's next reference to null

RETURN deletedTail // Return the deleted tail node
end DeleteTail
```
#### 8. ToString
> Description:
This method returns a string representation of the doubly linked list, joining node values with " <-> ". Unlike JSON.stringify(object), it correctly displays the list's structure.
```
// ToString()
//   Pre: The doubly linked list may be empty or contain nodes
//   Post: Returns a string representation of the list, with values joined by " <-> "
//   currentNode ← this.head // Start from the head of the list
//   values ← [] // Initialize an empty array to hold the node values
//   
//   // Traverse the linked list
//   while currentNode != null do
//       values.push(currentNode.value) // Add the current node's value to the array
//       currentNode ← currentNode.next // Move to the next node
//   end while
//   
//   return values.join(" <-> ") // Join the values with " <-> " and return the string
// end ToString
```

#### 9. ToStringCustom
```
ToStringCustom(callback)
   Pre: callback is a function that defines how to convert a node to a string
   Post: Returns a string representation of the list using the provided callback

   // Call this.ToArray() to get an array of nodes
   nodeStrings ← this.ToArray() // Get the array of nodes

   // Initialize an array to hold the string representations of the nodes
   resultStrings ← [] // Initialize an empty array to hold the node strings

   // FOR EACH node IN the array of nodes WITH index DO
   for index ← 0 to length(nodeStrings) - 1 do
       node ← nodeStrings[index] // Get the current node
       // Check the length of the callback function
       IF length(callback) < 2 THEN
           resultStrings.push(callback(node)) // Call callback(node) and add the result to resultStrings
       ELSE
           resultStrings.push(callback(node, index)) // Call callback(node, index) and add the result to resultStrings
       END IF
   end for

   // Convert the resultStrings array to a single string by joining elements with ", "
   RETURN resultStrings.join(", ") // Join the strings with ", " and return the result
end ToStringCustom
```
#### 10. DeleteRange
```
DeleteRange(fromIndex, toIndex)
   Pre: fromIndex and toIndex are expected to be numbers
   Post: Deletes nodes in the range from fromIndex to toIndex and returns the updated list

   // Check if fromIndex and toIndex are valid numbers
   IF fromIndex is NOT a number OR toIndex is NOT a number THEN
       RETURN null // Invalid input
   END IF

   // Check if fromIndex is greater than toIndex
   IF fromIndex > toIndex THEN
       RETURN null // Invalid range
   END IF

   // Initialize count to 0
   count ← 0
   // Initialize currentNode to this.head
   currentNode ← this.head
   // Initialize nodesToDelete as an empty array
   nodesToDelete ← [] // Array to hold nodes to be deleted

   // Traverse the linked list
   WHILE currentNode IS NOT null DO
       // Check if the current count is within the specified range
       IF count >= fromIndex AND count <= toIndex THEN
           nodesToDelete.push(currentNode) // Add currentNode to nodesToDelete
       END IF
       count ← count + 1 // Increment count
       currentNode ← currentNode.next // Move to the next node
   END WHILE

   // Delete each node in the nodesToDelete array
   FOR EACH node IN nodesToDelete DO
       CALL this.Delete(node.value) // Call the Delete method for each node's value
   END FOR

   RETURN this // Return the updated list
end DeleteRange
```
#### 11. Find
```
find({ value = undefined, callback = undefined })
   Pre: The doubly linked list may be empty or contain nodes
   Post: Returns the first node that matches the specified value or callback, or null if not found

   // Check if the list is empty
   IF this.head IS null THEN
       RETURN null // List is empty
   END IF

   // Initialize currentNode to the head of the list
   currentNode ← this.head

   // Traverse the linked list
   WHILE currentNode IS NOT null DO
       // Check if both value and callback are provided
       IF callback IS NOT undefined AND value IS NOT undefined THEN
           // Check if the current node's value matches and the callback returns true
           IF this.compare.equal(currentNode.value, value) AND callback(currentNode.value) THEN
               RETURN currentNode // Return if both conditions are met
           END IF
       END IF

       // Check if only callback is provided
       IF callback IS NOT undefined AND callback(currentNode.value) THEN
           RETURN currentNode // Return if callback returns true
       END IF

       // Check if only value is provided
       IF value IS NOT undefined AND this.compare.equal(currentNode.value, value) THEN
           RETURN currentNode // Return if value matches
       END IF

       currentNode ← currentNode.next // Move to the next node
   END WHILE

   RETURN null // No matching node found
end find
```

#### 12. ToArray
```
ToArray()
   Pre: The doubly linked list may be empty or contain nodes
   Post: Returns an array of nodes in the list

   // Initialize an empty array to hold the nodes
   nodes ← [] // Array to store the nodes

   // Set currentNode to the head of the list
   currentNode ← this.head

   // Traverse the linked list
   WHILE currentNode IS NOT null DO
       nodes.push(currentNode) // Add the current node to the nodes array
       currentNode ← currentNode.next // Move to the next node
   END WHILE

   RETURN nodes // Return the array of nodes
end ToArray
```

#### 13. FromArray
```
fromArray(values)
   Pre: values is an array of elements to be added to the doubly linked list
   Post: Returns the updated doubly linked list

   // Iterate over each value in the values array
   FOR EACH value IN values DO
       CALL this.append(value) // Append each value to the list
   END FOR

   RETURN this // Return the updated list
end fromArray
```

#### 14. Reverse
```
reverse()
   Pre: The doubly linked list may be empty or contain nodes
   Post: Reverses the order of the nodes in the list

   // Initialize currNode to this.head
   currNode ← this.head

   // Initialize prevNode to null
   prevNode ← null

   // Initialize nextNode to null
   nextNode ← null

   // Traverse the linked list
   WHILE currNode IS NOT null DO
       // Store the next node
       nextNode ← currNode.next
       prevNode ← currNode.previous

       // Change the next and previous pointers of the current node
       currNode.next ← prevNode
       currNode.previous ← nextNode

       // Move prevNode and currNode nodes one step forward
       prevNode ← currNode
       currNode ← nextNode
   END WHILE

   // Reset head and tail
   this.tail ← this.head
   this.head ← prevNode

   RETURN this // Return the updated list
end reverse
```