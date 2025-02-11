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

  //*ToString*/
  /*-----Pseudocode for ToString---*/
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
  ToString() {
    let currentNode = this.head;
    const values = [];
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values.join(" <-> ");
  }

  //*ToStringCustom()*/
  /*-----Pseudocode for ToStringCustom(callback)-----*/
  // ToStringCustom(callback)
  // Pre: callback is a function that defines how to convert a node to a string
  // Post: Returns a string representation of the list using the provided callback

  // Call this.ToArray() to get an array of nodes
  // Initialize an array called nodeStrings

  // FOR EACH node IN the array of nodes WITH index DO
  //     IF the length of callback is less than 2 THEN
  //         Call callback(node) and add the result to nodeStrings
  //     ELSE
  //         Call callback(node, index) and add the result to nodeStrings
  //     END IF
  // END FOR

  // Convert the nodeStrings array to a single string by joining elements with ", "
  // RETURN the resulting string
  // end ToStringCustom

  ToStringCustom(callback) {
    return this.ToArray()
      .map((node, index) => {
        return callback.length < 2 ? callback(node) : callback(node, index);
      })
      .join(", ");
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

  //*reverse()*/
  /*-----Pseudocode for reverse()-----*/
  // reverse()
  // Pre: The doubly linked list may be empty or contain nodes
  // Post: Reverses the order of the nodes in the list

  // Initialize currNode to this.head
  // currNode ← this.head

  // Initialize prevNode to null
  // prevNode ← null

  // Initialize nextNode to null
  // nextNode ← null

  // WHILE currNode IS NOT null DO
  //     // Store the next node
  //     nextNode ← currNode.next
  //     prevNode ← currNode.previous

  //     // Change the next and previous pointers of the current node
  //     currNode.next ← prevNode
  //     currNode.previous ← nextNode

  //     // Move prevNode and currNode nodes one step forward
  //     prevNode ← currNode
  //     currNode ← nextNode
  // END WHILE

  // // Reset head and tail
  // this.tail ← this.head
  // this.head ← prevNode

  // RETURN this // Return the updated list
  // end reverse
  Reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currentNode) {
      nextNode = currentNode.next;
      prevNode = currentNode.previous;

      currentNode.next = prevNode;
      currentNode.previous = nextNode;

      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.tail = this.head;
    this.head = prevNode;

    return this;
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

  //*DeleteRange()*/
  /*-----Pseudocode for DeleteRange(fromIndex, toIndex)-----*/
  // DeleteRange(fromIndex, toIndex)
  // Pre: fromIndex and toIndex are expected to be numbers
  // Post: Deletes nodes in the range from fromIndex to toIndex and returns the updated list

  // IF fromIndex is NOT a number OR toIndex is NOT a number THEN
  //     RETURN null
  // END IF

  // IF fromIndex > toIndex THEN
  //     RETURN null
  // END IF

  // Initialize count to 0
  // Initialize currentNode to this.head
  // Initialize nodesToDelete as an empty array

  // WHILE currentNode IS NOT null DO
  //     IF count >= fromIndex AND count <= toIndex THEN
  //         Add currentNode to nodesToDelete
  //     END IF
  //     Increment count
  //     Move currentNode to currentNode.next
  // END WHILE

  // FOR EACH node IN nodesToDelete DO
  //     Call this.Delete(node.value)
  // END FOR

  // RETURN this // Return the updated list
  // end DeleteRange
  DeleteRange(fromIndex, toIndex) {
    if (typeof fromIndex !== "number" || typeof toIndex !== "number") {
      return null;
    }

    if (fromIndex > toIndex) {
      return null;
    }

    let count = 0;
    let currentNode = this.head;
    let nodesToDelete = [];

    while (currentNode) {
      if (count >= fromIndex && count <= toIndex) {
        nodesToDelete.push(currentNode);
      }
      count++;
      currentNode = currentNode.next;
    }

    nodesToDelete.forEach((node) => this.Delete(node.value));

    return this;
  }

  //*DeleteTail()*/
  /*-----Pseudocode for DeleteTail()-----*/
  //   DeleteTail()
  //   Pre: The doubly linked list may be empty or contain nodes
  //   Post: Removes the tail node from the list and returns it, or returns null if the list is empty
  //
  //   // Check if there is no tail to delete
  //   IF this.tail = null THEN
  //       RETURN null // No tail to delete
  //   END IF
  //
  //   // Check if there is only one node in the linked list
  //   IF this.head = this.tail THEN
  //       deletedTail ← this.tail // Store the tail node to return
  //       this.head ← null // Set head to null
  //       this.tail ← null // Set tail to null
  //       RETURN deletedTail // Return the deleted tail node
  //   END IF
  //
  //   // If there are multiple nodes in the linked list
  //   deletedTail ← this.tail // Store the tail node to return
  //   this.tail ← this.tail.previous // Move the tail pointer to the previous node
  //   this.tail.next ← null // Set the new tail's next reference to null
  //
  //   RETURN deletedTail // Return the deleted tail node
  // end DeleteTail
  DeleteTail() {
    if (this.tail == null) {
      return null;
    }

    if (this.head == this.tail) {
      let deletedTail = this.tail;
      this.head = null;
      this.tail = null;
      return deletedTail;
    }

    let deletedTail = this.tail;
    this.tail = this.tail.previous;
    this.tail.next = null;

    return deletedTail;
  }

  //*DeleteHead()*/
  /*-----Pseudocode for DeleteHead()-----*/
  //   DeleteHead()
  //   Pre: The doubly linked list may be empty or contain nodes
  //   Post: Removes the head node from the list and returns it, or returns null if the list is empty
  //
  //   // Check if the list is empty
  //   IF this.head = null THEN
  //       RETURN null // No head to delete
  //   END IF
  //
  //   deletedHead ← this.head // Store the head node to return
  //
  //   // Check if there is more than one node in the list
  //   IF this.head.next ≠ null THEN
  //       this.head ← this.head.next // Move head pointer to the next node
  //       this.head.previous ← null // Set the new head's previous reference to null
  //   ELSE
  //       // If there is only one node in the list
  //       this.head ← null // Set head to null
  //       this.tail ← null // Set tail to null
  //   END IF
  //
  //   RETURN deletedHead // Return the deleted head node
  // end DeleteHead
  DeleteHead() {
    if (this.head == null) {
      return null;
    }

    const deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  //*find()*/
  /*-----Pseudocode for find({value, callback})-----*/
  // find({ value = undefined, callback = undefined })
  // Pre: The doubly linked list may be empty or contain nodes
  // Post: Returns the first node that matches the specified value or callback, or null if not found

  // IF this.head IS null THEN
  //     RETURN null // List is empty
  // END IF

  // currentNode ← this.head // Start from the head of the list

  // WHILE currentNode IS NOT null DO
  //     // Check if both value and callback are provided
  //     IF callback IS NOT undefined AND value IS NOT undefined THEN
  //         IF this.compare.equal(currentNode.value, value) AND callback(currentNode.value) THEN
  //             RETURN currentNode // Return if both conditions are met
  //         END IF
  //     END IF

  //     // Check if only callback is provided
  //     IF callback IS NOT undefined AND callback(currentNode.value) THEN
  //         RETURN currentNode // Return if callback returns true
  //     END IF

  //     // Check if only value is provided
  //     IF value IS NOT undefined AND this.compare.equal(currentNode.value, value) THEN
  //         RETURN currentNode // Return if value matches
  //     END IF

  //     currentNode ← currentNode.next // Move to the next node
  // END WHILE

  // RETURN null // No matching node found
  // end find
  Find({ value = undefined, callback = undefined }) {
    if (this.head === null) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (callback !== undefined && value !== undefined) {
        if (
          this.compare.equal(currentNode.value, value) &&
          callback(currentNode.value)
        ) {
          return currentNode;
        }
      } else if (callback !== undefined && callback(currentNode.value)) {
        return currentNode;
      } else if (
        value !== undefined &&
        this.compare.equal(currentNode.value, value)
      ) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }
    return null;
  }

  //*ToArray()*/
  /*-----Pseudocode for ToArray()-----*/
  // toArray()
  // Pre: The doubly linked list may be empty or contain nodes
  // Post: Returns an array of nodes in the list

  // Initialize an empty array to hold the nodes
  //  nodes ← []

  // Set currentNode to the head of the list
  //  currentNode ← this.head

  // WHILE currentNode IS NOT null DO
  //     Add the current node to the nodes array
  //     nodes.push(currentNode)
  //
  //     // Move to the next node
  //     currentNode ← currentNode.next
  // END WHILE

  // RETURN nodes // Return the array of nodes
  // end toArray
  ToArray() {
    let nodes = [];
    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  //*fromArray()*/
  /*-----Pseudocode for fromArray(values)-----*/
  // fromArray(values)
  // Pre: values is an array of elements to be added to the doubly linked list
  // Post: Returns the updated doubly linked list

  // FOR EACH value IN values DO
  //     Call this.append(value) // Append each value to the list
  // END FOR

  // RETURN this // Return the updated list
  // end fromArray
  FromArray(values) {
    values.forEach((value) => {
      this.Append(value);
    });
    return this;
  }
}

const MyList = new DoublyLinkedList();
MyList.Append("Third");
MyList.Prepend("Second");
MyList.Append("Fourth");
MyList.Prepend("First");

console.log("\n------L-I-N-E--O-F--S-E-P-A-R-A-T-I-O-N------\n");
console.log("List after initial insertions:");
console.log(MyList.ToString());
console.log("\n------L-I-N-E--O-F--S-E-P-A-R-A-T-I-O-N------\n");

MyList.Delete("Third");
MyList.Delete("Second");

console.log("Traversing the list:");
MyList.Traverse();
console.log("\n------L-I-N-E--O-F--S-E-P-A-R-A-T-I-O-N------\n");

console.log("Reverse Traversing the list:");
MyList.ReverseTraverse();
console.log("\n------L-I-N-E--O-F--S-E-P-A-R-A-T-I-O-N------\n");

console.log("Deleting tail element:");
console.log("Deleted Tail: " + JSON.stringify(MyList.DeleteTail()));
console.log("\n------L-I-N-E--O-F--S-E-P-A-R-A-T-I-O-N------\n");

console.log("List after deleting tail:");
console.log(MyList.ToString());
console.log("\n------L-I-N-E--O-F--S-E-P-A-R-A-T-I-O-N------\n");

MyList.Append(12);
MyList.Append(120);
MyList.Append(180);
MyList.Append(60);
MyList.Append(119);

console.log("List after appending new numbers:");
console.log(MyList.ToArray());
console.log("\n------L-I-N-E--O-F--S-E-P-A-R-A-T-I-O-N------\n");

console.log("Finding first even number:");
console.log(
  MyList.Find({
    callback: (value) => value % 2 === 0,
  })
);
console.log("\n------L-I-N-E--O-F--S-E-P-A-R-A-T-I-O-N------\n");

// FUNCTION IN FUNCTION (CLOSURE)
function specificEven(targetValue) {
  return function check(value) {
    return value % 2 === 0 && value === targetValue;
  };
}

console.log("Finding specific even number (60):");
console.log(
  MyList.Find({
    callback: specificEven(60),
  })
);
console.log("\n------L-I-N-E--O-F--S-E-P-A-R-A-T-I-O-N------\n");

console.log("Finding even number with value 180:");
console.log(
  MyList.Find({
    value: 180,
    callback: (value) => value % 2 === 0,
  })
);
console.log("\n------L-I-N-E--O-F--S-E-P-A-R-A-T-I-O-N------\n");
console.log("List After deleting Range (0-5):");

MyList.DeleteRange(0, 5);
console.log(MyList.ToArray());
console.log("\n------L-I-N-E--O-F--S-E-P-A-R-A-T-I-O-N------\n");

MyList.FromArray([12, 24, 36, 48, 60, 72, 84, 96, 108, 120]);
console.log(MyList.ToArray());
console.log("\n------L-I-N-E--O-F--S-E-P-A-R-A-T-I-O-N------\n");
console.log("normal to string");
console.log(MyList.ToString());
console.log("custom to string");
console.log(
  MyList.ToStringCustom((value, index) => {
    return `Node ${index + 1}: ${value}`;
  })
);
console.log("\n------L-I-N-E--O-F--S-E-P-A-R-A-T-I-O-N------\n");
console.log("List before reversing");
console.log(MyList.ToString());
MyList.Reverse();
console.log("List after reversing");
console.log(MyList.ToString());
("\n------L-I-N-E--O-F--S-E-P-A-R-A-T-I-O-N------\n");
