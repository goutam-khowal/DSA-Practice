**Linked List Operations Pseudocodes**

1. # **Append (Add at End)**

   // Add(value)

   // Pre: value is the value to add to the list

   // Post: value has been placed at the tail of the list function Add(value)

n ← node(value) // Create a new node with the given value if head = null then

head ← n // If the list is empty, set head to new node tail ← n // Set tail to new node

else

tail.next ← n // Link the last node to the new node tail ← n // Update tail to the new node

end if

end function

1. # **Prepend (Add at Head)**

   // Prepend(value)

   // Pre: value is the value to add to the list

   // Post: value has been placed at the head of the list function Prepend(value)

n ← node(value) // Create a new node with the given value n.next ← head // Link new node to the current head

head ← n // Update head to the new node if tail = null then

tail ← n // If the list was empty, set tail to new node end if

end function

1. # **Insert at Specific Index**

   // InsertAt(value, rawIndex)

   // Pre: value is the value to add to the list

   // rawIndex is the position at which to insert the value

   // Post: value has been inserted at the specified index in the list function InsertAt(value, rawIndex)

index ← max(0, rawIndex) // Ensure index is non-negative if index = 0 then

Call Prepend(value) // Insert at the head else

count ← 1 currentNode ← head

newNode ← node(value) // Create a new node

while currentNode ≠ null do if count = index then

break // Found the position to insert end if

currentNode ← currentNode.next count ← count + 1

end while

if currentNode ≠ null then

newNode.next ← currentNode.next // Link new node to the next node currentNode.next ← newNode // Link current node to the new node

else

if tail ≠ null then

tail.next ← newNode // Link last node to new node tail ← newNode // Update tail

else

head ← newNode // If list was empty, set head and tail to new node tail ← newNode

end if end if

end if

end function

1. # **Search for a Value (Contains)**

   // Contains(head, value)

   // Pre: head is the head node in the list

   // value is the value to search for

   // Post: Returns true if the value is found, otherwise false function Contains(head, value)

n ← head

while n ≠ null and n.value ≠ value do

n ← n.next end while

return n ≠ null // Return true if found, false otherwise end function

1. # **Find a Node**

   // Find({ value = undefined, callback = undefined })

   // Pre: The linked list may be empty or contain nodes

   // Post: Returns the first node that matches the specified value or callback, or null if not found function Find({ value = undefined, callback = undefined })

if head = null then

return null // If the list is empty, return null end if

currentNode ← head

while currentNode ≠ null do

if callback ≠ null and callback(currentNode.value) then

return currentNode // Return current node if callback matches end if

if value ≠ undefined and currentNode.value = value then return currentNode // Return current node if value matches

end if

currentNode ← currentNode.next // Move to the next node end while

return null // Return null if no matching node is found end function

1. # **Remove a Value**

   // Remove(head, value)

   // Pre: head is the head node in the list

   // value is the value to remove from the list

   // Post: Returns true if value is removed, otherwise false function Remove(head, value)

if head = null then

return false // List is empty end if

n ← head

if n.value = value then if head = tail then

head ← null // List becomes empty tail ← null

else

head ← head.next // Update head to the next node end if

return true // Value removed end if

while n.next ≠ null and n.next.value ≠ value do n ← n.next

end while

if n.next ≠ null then if n.next = tail then

tail ← n // Update tail to the previous node tail.next ← null // Remove link to the last node

else

n.next ← n.next.next // Bypass the node to be removed end if

return true // Value removed end if

return false // Value not found end function

1. # **Delete Head Node**

   // DeleteHead()

   // Pre: The linked list may be empty or contain nodes

   // Post: The head node is removed from the linked list, and the deleted node is returned function DeleteHead()

if head = null then

return null // If the list is empty, return null end if

deletedHead ← head // Store the current head node head ← head.next // Update head to the next node

if head = null then

tail ← null // If the list is now empty, set tail to null end if

return deletedHead // Return the removed head node end function

1. # **Delete Tail Node**

   // DeleteTail()

   // Pre: The linked list may be empty or contain nodes

   // Post: The tail node is removed from the linked list, and the deleted node is returned function DeleteTail()

if head = null then

return null // If the list is empty, return null end if

deletedTail ← tail // Store the current tail node

if head = tail then

head ← null // If there is only one node, set head to null tail ← null // Set tail to null (list is now empty)

return deletedTail // Return the removed tail node end if

currentNode ← head // Start from the head while currentNode.next ≠ null do

if currentNode.next.next = null then

currentNode.next ← null // Remove the link to the last node else

currentNode ← currentNode.next // Move to the next node end if

end while

tail ← currentNode // Update tail to the new last node

return deletedTail // Return the removed tail node end function

1. # **Traverse the List**

   // Traverse(head)

   // Pre: head is the head node in the list

   // Post: The items in the list have been traversed function Traverse(head)

n ← head

while n ≠ null do

yield n.value // Output the current node's value n ← n.next // Move to the next node

end while end function

1. # **Reverse Traverse the List**

   // ReverseTraversal(head, tail)

   // Pre: head and tail belong to the same list

   // Post: The items in the list have been traversed in reverse order function ReverseTraversal(head, tail)

if tail ≠ null then curr ← tail

while curr ≠ head do prev ← head

while prev.next ≠ curr do prev ← prev.next

end while

yield curr.value // Output the current node's value curr ← prev // Move to the previous node

end while

yield curr.value // Output the head node's value end if

end function

1. # **Reverse the List**

   // Reverse()

   // Pre: The linked list is non-empty

   // Post: The linked list is reversed function Reverse()

currNode ← head // Start with the head of the list prevNode ← null // Initialize previous node as null

while currNode ≠ null do

nextNode ← currNode.next // Store the next node currNode.next ← prevNode // Reverse the link

prevNode ← currNode // Move prevNode one step forward currNode ← nextNode // Move currNode one step forward

end while

tail ← head // Update tail to the original head

head ← prevNode // Update head to the new head (prevNode) return this // Return the updated linked list instance

end function

1. # **Convert to Array (ToArray)**

   // ToArray()

   // Pre: The linked list may be empty or contain nodes

   // Post: Returns an array containing the values of all nodes in the linked list function ToArray()

nodes ← [] // Initialize an empty array to hold the node values currentNode ← head // Start with the head of the list

// Traverse the linked list while currentNode ≠ null do

nodes.push(currentNode.value) // Add the current node's value to the array currentNode ← currentNode.next // Move to the next node

end while

return nodes // Return the array of node values end function

1. # **Populate Linked List from Array (FromArray)**

   // FromArray(values)

   // Pre: values is an array of values to add to the linked list

   // Post: The linked list is populated with the values from the array function FromArray(values)

// Check if the input array is empty

if values.length = 0 then

return this // If empty, return the current linked list instance

// Iterate through each value in the input array for each value in values do

Call Append(value) // Append each value to the linked list end for

return this // Return the updated linked list instance end function
