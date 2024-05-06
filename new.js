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

    push(val){
        let node = new Node(val)
        if(this.top == null){
            this.top = node;
        }else{
            node.next = this.top;
            this.top = node;
        }
    }

    pop(){
        if(this.head == null){
            return console.log("Stack underflow")
        }else{
            this.head = this.head.next;
        }
    }

    del(val){
        let current = this.top;
        prev = null;
        while(current!=null){
            if(current.value == val){
                prev.next = current.next;
            }
            prev = current;
            current = current.next;
        }
    }


    delInQueue(val){
        if(this.head == null) return;
        let current = this.head;
        let arr = [];
        while(curren!=null){
            if(current.value == val){
                break;
            }
            arr.push(curren.value)
            curren = current.next;
        }

    }
}