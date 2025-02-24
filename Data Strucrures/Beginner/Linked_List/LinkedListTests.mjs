import LinkedList from "./LinkedList.mjs";

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
