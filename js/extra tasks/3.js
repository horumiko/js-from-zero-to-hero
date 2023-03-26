class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class List {
    constructor(rootValue) {
      this.root = new Node(rootValue);
      this.length = 1;
    }
  
    addNode(value, i) {
      if (i && i > this.length - 1) {
        return false;
      }
      
      const newNode = new Node(value);
  
      if (!i) {
        let currentNode = this.root;
  
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
  
        currentNode.next = newNode;
      } else {
        let currentNode = this.root;
        let currentIndex = 0;
  
        while (currentNode.next && currentIndex < i) {
          currentNode = currentNode.next;
          currentIndex++;
        }
  
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }
  
      this.length++;
  
      return true;
    }
  
    removeNode(i) {
        if (!this.root.next) {
          return false;
        }
      
        if (i === undefined) {
          let currentNode = this.root;
          let prevNode = null;
      
          while (currentNode.next) {
            prevNode = currentNode;
            currentNode = currentNode.next;
          }
      
          prevNode.next = null;
          this.length--;
      
          return true;
        }
      
        if (i >= this.length) {
          return false;
        }
      
        let currentNode = this.root;
        let prevNode = null;
        let currentIndex = 0;
      
        while (currentIndex < i) {
          prevNode = currentNode;
          currentNode = currentNode.next;
          currentIndex++;
        }
      
        if (!prevNode) {
          this.root = currentNode.next;
        } else {
          prevNode.next = currentNode.next;
        }
      
        this.length--;
      
        return true;
      }
      
  
    print() {
      let currentNode = this.root;
      const values = [];
  
      while (currentNode) {
        values.push(currentNode.value);
        currentNode = currentNode.next;
      }
  
      console.log(values.join(", "));
    }
  }

  
const list = new List(1);

list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5, 1);

list.print(); // 1, 2, 5, 3, 4

list.removeNode(2);

list.print(); // 1, 2, 3, 4

list.removeNode();

list.print(); // 1, 2, 3
