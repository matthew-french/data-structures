// A simple example of a linked list

function Node(data) {
  this.data = data;
  this.next = null;
}

function Solution() {
  this.removeDuplicates = function(head) {
    // Empty or a single element Linked List
    if (!head || !head.next) {
      console.log('No duplicates were found. Empty or a single element Linked List.');
      return;
    }

    var currentNode = head;
    var nextNode = currentNode.next;
    var hash = {};

    hash[currentNode.data] = true;

    while (nextNode) {
        var data = nextNode.data;
        if (hash[data]) {
            currentNode.next = nextNode.next;
        } else {
            hash[data] = true;
            currentNode = nextNode;
        }
        nextNode = nextNode.next;
    }
  }
  this.insert = function(head,data) {
    var newNode = new Node(data);
    if (head === null) head = newNode;
    else if (head.next === null) head.next = newNode;
    else {
      var start = head;
      while (start.next !== null) {
        start = start.next;
      }
      start.next = newNode;
    }
    return head;
  }

}

var ll = new Solution();
var arr = [1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3];
var head = null;

for (var i = 0; i < arr.length; i++) {
  head = ll.insert(head,arr[i]);
}

console.log(head);

//head = ll.removeDuplicates(head);

//ll.removeDuplicates(head);

ll.removeDuplicates(head);
