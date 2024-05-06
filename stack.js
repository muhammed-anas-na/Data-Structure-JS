class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Stack{
    constructor(){
        this.top = null;
    }
    isEmpty(){
        return this.top == null
      }

    push(value){
        let node = new Node(value);
        if(this.top == null){
            this.top = node;
        }else{
            node.next = this.top
            this.top = node;
        }
    }

    peek(){
        let current = this.top;
        if(current == null){
            console.log("Stack Empty")
        }else{
            console.log(current.value)
        }
    }

    pop(){
        let current = this.top;
        if(current == null){
            console.log("Stack underflow");
            return null;
        }else{
            this.top = current.next
        }
    }

    display(){
        let current = this.top;
        while(current!=null){
            console.log(current.value);
            current = current.next;
        }
    }


    rev(){
        let current = this.top;
        let prev = null;
        while(current){
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.top = prev;
    }

    delmid(){
        let temp = this.top;
        var count = 0;
        while(temp!=null){
            count++;
            temp = temp.next;
        }
        let mid = Math.floor(count/2)
        let it = 0;
        let prev = null;
        let current = this.top;
        while(it<mid){
            it++;
            prev = current
            current = current.next;
        }
        prev.next = current.next
    }
}

let stack = new Stack();

function insertAtBottom(stack, value) {
    // console.log(stack,value);
    if (stack.isEmpty()) {
      stack.push(value);
      return;
    }
  
    const top = stack.pop();
    insertAtBottom(stack, value);
    stack.push(top);
}
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.delmid()
stack.display()