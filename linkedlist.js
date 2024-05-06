class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null
        this.size = 0;
    }

    display(){
        let prev = this.head;
        while(prev!=null){
            console.log(prev.value)
            prev = prev.next;
        }
    }

    isEmpty(){
        return this.size == 0;
    }

    reverse(){
        let prev = null;
        let current = this.head;
        while(current){
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    prepend(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;

        }
        this.size++;
    }

    append(value){
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
            
        }
        this.size++
    }

    insertAt(value,position){
        if(position<0 || position>this.size){
            console.log('wrong position')
            return;
        }else{
            let newNode = new Node(value)
            if(position == 0){
                newNode.next = this.head;
                this.head = newNode;
            }else{
                let temp = this.head;
                let prev = this.head;
                let it = 0;
                while(it<position){
                    it++;
                    prev = temp;
                    temp = temp.next;
                }
                prev.next = newNode;
                newNode.next = temp;

            }
            this.size++
        }
    }

    delete(value){
        if(this.isEmpty()){
            return;
        }else{
            let temp = this.head;
            let prev =null;
            while(temp!=null){
                if(temp.value == value){
                    if(prev == null){
                        this.head = temp.next
                    }else{
                        prev.next = temp.next;
                    }
                }
                prev = temp;
                temp = temp.next;
            }
            this.size--;
        }
    }
}

let ls = new LinkedList()
ls.append(3)
ls.append(5)
ls.append(6)
ls.reverse()
ls.display()