class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //*Insert*/
  /*-----Pseudocode for adding at end (appending)-----*/

  //   Add(value)
  //   Pre: value is the value to add to the list
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

  add(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  /*-----Pseudocode for prepending-----*/
  //   Prepend(value)
  //  Pre: value is the value to add to the list
  //  Post: value has been placed at the head of the list
  //  n ← node(value)
  //  n.next ← head
  //  head ← n
  //  if tail = ø
  //    tail ← n
  //  end
  // end Prepend
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    if (this.tail == null) {
      this.tail = newNode;
    }
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
  contains(value) {
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
  delete(value) {
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

  //*Traverse*/
  /*-----Pseudocode for Traverse-----*/
  //   Traverse(head)
  //   Pre: head is the head node in the list
  //   Post: the items in the list have been traversed
  //   n ← head
  //   while n != ø
  //     yield n.value
  //     n ← n.next
  //   end while
  // end Traverse
  traverse() {
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
  //   Post: the items in the list have been traversed in reverse order
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
}

const MyLinkedList = new LinkedList();

MyLinkedList.add(56);
MyLinkedList.prepend(1);
MyLinkedList.prepend(1002);
MyLinkedList.prepend(12);
MyLinkedList.prepend(102);
MyLinkedList.prepend(100);

console.log("\n\n**************\n\nResults:\n");
console.log(JSON.stringify(MyLinkedList));
console.log("\n**************\n");
console.log("Contains 1002 : " + MyLinkedList.contains(1002) + "\n");
console.log("Contains 1 : " + MyLinkedList.contains(1) + "\n");

MyLinkedList.delete(1);

console.log("\n\n**************\n\nResults after delete:\n");
console.log(JSON.stringify(MyLinkedList));

console.log("\n\n**************\nTraversing the Linked List");
MyLinkedList.traverse();
