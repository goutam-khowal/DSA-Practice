class Node {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class Compare {
  equal(a, b) {
    return a === b;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  compare = new Compare();

  //*Traverse*/
  /*-----Pseudocode for Traversal---*/
  //   Traverse()
  //   Pre: The doubly linked list may be empty or contain nodes
  //   Post: Processes each node's value in the list
  //
  //   currentNode ← this.head // Start from the head of the list
  //
  //   // Traverse the linked list
  //   WHILE currentNode ≠ null DO
  //       // Process the current node's value (e.g., print or store it)
  //       PROCESS(currentNode.value) // Replace with actual processing logic
  //
  //       currentNode ← currentNode.next // Move to the next node
  //   END WHILE
  //
  //   RETURN // End of traversal
  // end Traverse
  Traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  //*ReverseTraverse*/
  /*-----Pseudocode for ReverseTraversal---*/
  //   ReverseTraverse()
  //   Pre: The doubly linked list may be empty or contain nodes
  //   Post: Processes each node's value in reverse order
  //
  //   currentNode ← this.tail // Start from the tail of the list
  //
  //   // Traverse the linked list in reverse
  //   WHILE currentNode ≠ null DO
  //       // Process the current node's value (e.g., print or store it)
  //       PROCESS(currentNode.value) // Replace with actual processing logic
  //
  //       currentNode ← currentNode.previous // Move to the previous node
  //   END WHILE
  //
  //   RETURN // End of reverse traversal
  // end ReverseTraverse
  ReverseTraverse() {
    let currentNode = this.tail;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.previous;
    }
  }

  //*Insert*/
  /*-----Pseudocode for Adding at beginning (Prepending)-----*/
  //   Prepend(value)
  //   Pre: value is the value to add to the front of the doubly linked list
  //   Post: A new node with the given value is added at the head of the list
  //   newNode ← new DoublyLinkedListNode(value, this.head, null) // Create a new node
  //
  //   IF this.head ≠ null THEN
  //       this.head.previous ← newNode // Update previous reference of the current head
  //   END IF
  //
  //   this.head ← newNode // Update the head to be the new node
  //
  //   IF this.tail = null THEN
  //       this.tail ← newNode // Set the new node as the tail if the list was empty
  //   END IF
  //
  //   RETURN this // Return the updated doubly linked list instance
  // end Prepend
  Prepend(value) {
    const newNode = new Node(value, this.head, null);
    if (this.head) {
      this.head.previous = newNode;
    }
    this.head = newNode;
    if (this.tail == null) {
      this.tail = newNode;
    }
    return this;
  }

  //*Insert*/
  /*-----Pseudocode for Appending-----*/
  //   Append(value)
  //   Pre: value is the value to add to the end of the doubly linked list
  //   Post: A new node with the given value is added at the tail of the list
  //   newNode ← new DoublyLinkedListNode(value) // Create a new node with the given value
  //
  //   // If there is no head yet, make the new node the head and tail
  //   if this.head = null THEN
  //       this.head ← newNode // Set head to the new node
  //       this.tail ← newNode // Set tail to the new node
  //       RETURN this // Return the updated doubly linked list instance
  //   END IF
  //
  //   // Attach the new node to the end of the linked list
  //   this.tail.next ← newNode // Link the current tail to the new node
  //
  //   // Attach the current tail to the new node's previous reference
  //   newNode.previous ← this.tail // Set the previous reference of the new node
  //
  //   // Set the new node to be the tail of the linked list
  //   this.tail ← newNode // Update the tail to the new node
  //
  //   RETURN this // Return the updated doubly linked list instance
  // end Append
  Append(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;

    return this;
  }

  //*Delete(value)*/
  /*-----Pseudocode for Delete(value)-----*/
  //   Delete(value)
  //   Pre: value is the value to remove from the doubly linked list
  //   Post: Returns the deleted node if found, otherwise null
  //   if head = null
  //       return null // List is empty
  //   end if
  //
  //   currentNode ← head // Start from the head
  //   while currentNode ≠ null do
  //       if currentNode.value = value then
  //           // If deleting the head node
  //           if currentNode = head then
  //               head ← head.next // Update head
  //               if head ≠ null then
  //                   head.previous ← null // Update new head's previous
  //               end if
  //           // If deleting the tail node
  //           else if currentNode = tail then
  //               tail ← tail.previous // Update tail
  //               tail.next ← null // Remove link to deleted node
  //           else
  //               // Deleting a middle node
  //               previousNode ← currentNode.previous
  //               nextNode ← currentNode.next
  //               previousNode.next ← nextNode // Link previous to next
  //               if nextNode ≠ null then
  //                   nextNode.previous ← previousNode // Link next to previous
  //               end if
  //           end if
  //           return currentNode // Return the deleted node
  //       end if
  //       currentNode ← currentNode.next // Move to the next node
  //   end while
  //
  //   return null // Value not found
  // end Delete
  Delete(value) {
    if (this.head == null) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        if (currentNode == this.head) {
          this.head = this.head.next;
          if (this.head) {
            this.head.previous = null;
          }
        } else if (currentNode == this.tail) {
          this.tail = this.tail.previous;
          this.tail.next = null;
        } else {
          let previousNode = currentNode.previous;
          let nextNode = currentNode.next;
          previousNode.next = nextNode;
          if (nextNode) {
            nextNode.previous = previousNode;
          }
        }
        return currentNode; //Deleted Value
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}

const MyList = new DoublyLinkedList();
MyList.Append("Third");
MyList.Prepend("Second");
MyList.Append("Fourth");
MyList.Prepend("First");
MyList.Delete("Third");
MyList.Delete("Second");

MyList.Traverse();
console.log();
MyList.ReverseTraverse();
