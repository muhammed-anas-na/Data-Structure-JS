class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size == 0;
    }
    enQueue(value){
        let node = new Node(value)
        if(this.head == null){
            this.tail = node;
            this.head = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    dequeue(){
        if(this.head == null){
            return;
        }else{
            this.head = this.head.next
        }
    }
    display(){
        if(this.head == null) console.log("Empty")
        let current = this.head;
        while(current!=null){
            console.log(current.value)
            current = current.next;
        }
    }

    rev(){
        let current = this.head;
        let prev = null;
        while(current){
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}

let qu = new Queue();
qu.enQueue(1)
qu.enQueue(2)
qu.enQueue(3)
qu.rev()
qu.display();