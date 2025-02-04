class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Compare {
  equal(a, b) {
    return a === b;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  //*Compare*/
  compare = new Compare();

  //*Insert*/
  /*-----Pseudocode for Adding at end (appending)-----*/

  //   Add(value)
  //   Pre: value is the value to Add to the list
  //   Post: value has been placed at the tail of the list
  //   n ← node(value)
  //   if head = ø
  //     head ← n
  //     tail ← n
  //   else
  //     tail.next ← n
  //     tail ← n
  //   end if
  // end Add

  Add(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  //*Insert*/
  /*-----Pseudocode for Prepending-----*/
  //   Prepend(value)
  //  Pre: value is the value to Add to the list
  //  Post: value has been placed at the head of the list
  //  n ← node(value)
  //  n.next ← head
  //  head ← n
  //  if tail = ø
  //    tail ← n
  //  end
  // end Prepend
  Prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    if (this.tail == null) {
      this.tail = newNode;
    }
  }
  //*Insert*/
  /*-----Pseudocode for InsertAt-----*/
  //   InsertAt(value, rawIndex)
  //  Pre: value is the value to Add to the list
  //       rawIndex is the position at which to insert the value
  //  Post: value has been inserted at the specified index in the list
  //  index ← IF rawIndex < 0 THEN 0 ELSE rawIndex
  //  IF index = 0 THEN
  //      CALL Prepend(value) // Insert at the head of the list
  //  ELSE
  //      count ← 1
  //      currentNode ← head
  //      newNode ← node(value) // Create a new node with the given value
  //
  //      WHILE currentNode ≠ ø DO
  //          IF count = index THEN
  //              BREAK // Found the position to insert
  //          END IF
  //          currentNode ← currentNode.next
  //          count ← count + 1
  //      END WHILE
  //
  //      IF currentNode ≠ ø THEN
  //          newNode.next ← currentNode.next // Link new node to the next node
  //          currentNode.next ← newNode // Link current node to the new node
  //      ELSE
  //          IF tail ≠ ø THEN
  //              tail.next ← newNode // Link the last node to the new node
  //              tail ← newNode // Update the tail to the new node
  //          ELSE
  //              head ← newNode // If the list was empty, set head to the new node
  //              tail ← newNode // Set tail to the new node as well
  //          END IF
  //      END IF
  //  END IF
  //
  //  RETURN this // Return the updated linked list instance
  // end InsertAt
  InsertAt(value, rawIndex) {
    const index = rawIndex < 0 ? 0 : rawIndex;
    if (index == 0) {
      this.Prepend(value); //Insert at head (of List)
    } else {
      let count = 1;
      let currentNode = this.head;
      const newNode = new Node(value);

      while (currentNode != null) {
        if (count === index) break;
        currentNode = currentNode.next;
        count = count + 1;
      }

      if (currentNode != null) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      } else {
        if (this.tail !== null) {
          this.tail.next = newNode;
          this.tail = newNode;
        } else {
          this.head = newNode;
          this.tail = newNode;
        }
      }
    }
    return this;
  }

  //*Search*/
  /*-----Pseudocode for Search-----*/
  //   Contains(head, value)
  //   Pre: head is the head node in the list
  //        value is the value to search for
  //   Post: the item is either in the linked list, true; otherwise false
  //   n ← head
  //   while n != ø and n.value != value
  //     n ← n.next
  //   end while
  //   if n = ø
  //     return false
  //   end if
  //   return true
  // end Contains
  Contains(value) {
    let currentNode = this.head; //no need to take head as an arg
    while (currentNode != null && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    if (currentNode == null) {
      return false;
    } else {
      return true;
    }
  }

  //*Find*/
  /*-----Pseudocode for Find-----*/
  //   Find({ value = undefined, callback = undefined })
  //  Pre: The linked list may be empty or contain nodes
  //  Post: Returns the first node that matches the specified value or callback, or null if not found
  //
  //  IF head = ø THEN
  //      RETURN ø // If the list is empty, return null
  //  END IF
  //
  //  currentNode ← head // Start from the head of the list
  //
  //  WHILE currentNode ≠ ø DO
  //      // If a callback is specified, check if it matches the current node's value
  //      IF callback ≠ ø AND callback(currentNode.value) THEN
  //          RETURN currentNode // Return the current node if callback matches
  //      END IF
  //
  //      // If a value is specified, check if it matches the current node's value
  //      IF value ≠ undefined AND compare.equal(currentNode.value, value) THEN
  //          RETURN currentNode // Return the current node if value matches
  //      END IF
  //
  //      currentNode ← currentNode.next // Move to the next node
  //  END WHILE
  //
  //  RETURN ø // Return null if no matching node is found
  // end Find

  Find({ value = undefined, callback = undefined }) {
    if (this.head == null) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  //*Delete*/
  /*-----Pseudocode for Delete-----*/
  //     Remove(head, value)
  //   Pre: head is the head node in the list
  //        value is the value to remove from the list
  //   Post: value is removed from the list, true, otherwise false
  //   if head = ø
  //     return false
  //   end if
  //   n ← head
  //   if n.value = value
  //     if head = tail
  //       head ← ø
  //       tail ← ø
  //     else
  //       head ← head.next
  //     end if
  //     return true
  //   end if
  //   while n.next != ø and n.next.value != value
  //     n ← n.next
  //   end while
  //   if n.next != ø
  //     if n.next = tail
  //       tail ← n
  //       tail.next = null
  //     else
  //       n.next ← n.next.next
  //     end if
  //     return true
  //   end if
  //   return false
  // end Remove
  Delete(value) {
    if (this.head == null) {
      return false;
    }
    let currentNode = this.head;
    if (currentNode.value === value) {
      if (this.head == this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      return true;
    }
    while (currentNode.next != null && currentNode.next.value != value) {
      currentNode = currentNode.next;
    }
    if (currentNode.next != null) {
      if (currentNode.next === this.tail) {
        this.tail = currentNode;
        this.tail.next = null;
      } else {
        currentNode.next = currentNode.next.next;
      }
      return true;
    }
    return false;
  }

  //*DeleteHead*/
  /*-----Pseudocode for DeleteHead-----*/
  //   DeleteHead()
  //  Pre: The linked list may be empty or contain nodes
  //  Post: The head node is removed from the linked list, and the deleted node is returned
  //
  //  IF head = ø THEN
  //      RETURN ø // If the list is empty, return null
  //  END IF
  //
  //  deletedHead ← head // Store the current head node
  //
  //  IF head.next ≠ ø THEN
  //      head ← head.next // Update head to the next node
  //  ELSE
  //      head ← ø // Set head to null (list is now empty)
  //      tail ← ø // Set tail to null (list is now empty)
  //  END IF
  //
  //  RETURN deletedHead // Return the removed head node
  // end DeleteHead
  DeleteHead() {
    if (!this.head) {
      return null;
    }
    const deleteHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deleteHead;
  }

  //*DeleteTail*/
  /*-----Pseudocode for DeleteTail-----*/
  DeleteTail() {
    const deletedTail = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.next == null) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  //*Traverse*/
  /*-----Pseudocode for Traverse-----*/
  //   Traverse(head)
  //   Pre: head is the head node in the list
  //   Post: the items in the list have been tTaversed
  //   n ← head
  //   while n != ø
  //     yield n.value
  //     n ← n.next
  //   end while
  // end Traverse
  Traverse() {
    let currentNode = this.head;
    while (currentNode != null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
  //*Traverse in reverse*/
  /*-----Pseudocode for Traverse in reverse-----*/
  // ReverseTraversal(head, tail)
  //   Pre: head and tail belong to the same list
  //   Post: the items in the list have been tTaversed in reverse order
  //   if tail != ø
  //     curr ← tail
  //     while curr != head
  //       prev ← head
  //       while prev.next != curr
  //         prev ← prev.next
  //       end while
  //       yield curr.value
  //       curr ← prev
  //     end while
  //    yield curr.value
  //   end if
  // end ReverseTraversal
  ReverseTraverse() {
    if (this.tail != null) {
      let currentNode = this.tail;
      while (currentNode != this.head) {
        let prevNode = this.head;
        while (prevNode.next != currentNode) {
          prevNode = prevNode.next;
        }
        console.log(currentNode.value);
        currentNode = prevNode;
      }
      console.log(currentNode.value);
    }
  }

  //*Reverse*/
  /*-----Pseudocode for Reverse-----*/
  //   Reverse()
  //  Pre: The linked list is non-empty
  //  Post: The linked list is reversed
  //  currNode ← head // Start with the head of the list
  //  prevNode ← ø // Initialize previous node as null
  //  nextNode ← ø // Initialize next node as null
  //
  //  WHILE currNode ≠ ø DO
  //      nextNode ← currNode.next // Store the next node
  //      currNode.next ← prevNode // Reverse the link
  //      prevNode ← currNode // Move prevNode one step forward
  //      currNode ← nextNode // Move currNode one step forward
  //  END WHILE
  //
  //  tail ← head // Update tail to the original head
  //  head ← prevNode // Update head to the new head (prevNode)
  //
  //  RETURN this // Return the updated linked list instance
  // end Reverse
  Reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.tail = this.head;
    this.head = prevNode;
    return this;
  }
  //*To Array*/
  /*-----Pseudocode for ToArray-----*/
  //   ToArray()
  //  Pre: The linked list is non-empty or empty
  //  Post: An array containing all nodes of the linked list is returned
  //  nodes ← [] // Initialize an empty array to hold the nodes
  //  currentNode ← head // Start with the head of the list
  //
  //  WHILE currentNode ≠ ø DO
  //      nodes.push(currentNode) // Add the current node to the array
  //      currentNode ← currentNode.next // Move to the next node
  //  END WHILE
  //
  //  RETURN nodes // Return the array of nodes
  // end ToArray
  ToArray() {
    let nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  //*From Array*/
  /*-----Pseudocode for FromArray-----*/
  //   FromArray(values)
  //  Pre: values is an array of values to add to the linked list
  //  Post: The linked list is populated with the values from the array
  //
  //  FOR EACH value IN values DO
  //      CALL Append(value) // Append each value to the linked list
  //  END FOR
  //
  //  RETURN this // Return the updated linked list instance
  // end FromArray
  FromArray(values) {
    values.forEach((value) => {
      this.Add(value);
    });
    return this;
  }
}

const MyLinkedList = new LinkedList();

MyLinkedList.Add(56);
MyLinkedList.Prepend(1);
MyLinkedList.Prepend(1002);
MyLinkedList.Prepend(12);
MyLinkedList.Prepend(102);
MyLinkedList.Prepend(100);

console.log("\n\n**************\n\nResults:\n");
console.log(JSON.stringify(MyLinkedList));
console.log("\n**************\n");
console.log("Contains 1002 : " + MyLinkedList.Contains(1002) + "\n");
console.log("Contains 1 : " + MyLinkedList.Contains(1) + "\n");

MyLinkedList.Delete(1);

console.log("\n\n**************\n\nResults after Delete:\n");
console.log(JSON.stringify(MyLinkedList));

console.log("\n\n**************\nTraversing the Linked List");
MyLinkedList.Traverse();
console.log("\n\n**************\nReverse Traversing the Linked List");
MyLinkedList.ReverseTraverse();
MyLinkedList.InsertAt(50000, 2);
MyLinkedList.InsertAt(50005, 3);
console.log("\n\n**************\nTraversing the Linked List");
MyLinkedList.Traverse();

console.log("Original");
console.log(JSON.stringify(MyLinkedList));

MyLinkedList.Reverse();
console.log("Reversed");
console.log(JSON.stringify(MyLinkedList));

console.log(MyLinkedList.ToArray());

console.log();
MyLinkedList.FromArray([5, 10, 15, 20, "Goutam", 25]);
MyLinkedList.Traverse();

MyLinkedList.DeleteHead();
console.log();
MyLinkedList.Traverse();
console.log();
console.log();
MyLinkedList.DeleteTail();
MyLinkedList.Traverse();
console.log();
console.log();

console.log(MyLinkedList.Find({ value: "Goutam" }));
MyLinkedList.Delete("Goutam");
console.log(MyLinkedList.Find({ value: "Goutam" }));
