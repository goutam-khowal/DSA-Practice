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

> **Description:**  
> ToString is implemented to overcome JSON.stringify’s circular reference error by traversing the doubly linked list. It collects each node’s value and concatenates them with " <-> ", producing a human-readable string output.

```
 ToString()
   Pre: The doubly linked list may be empty or contain nodes
   Post: Returns a string representation of the list, with values joined by " <-> "
   currentNode ← this.head // Start from the head of the list
   values ← [] // Initialize an empty array to hold the node values

   // Traverse the linked list
   while currentNode != null do
       values.push(currentNode.value) // Add the current node's value to the array
       currentNode ← currentNode.next // Move to the next node
   end while

   return values.join(" <-> ") // Join the values with " <-> " and return the string
 end ToString
```
