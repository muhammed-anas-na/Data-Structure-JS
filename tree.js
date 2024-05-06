class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree{
    constructor(){
        this.root = null;
    }
    insert(data){
        const newNode = new Node(data);
        if(this.root == null){
            this.root = newNode;
        }else{
            this.insertNode(this.root , newNode)
        }
    }

    insertNode(node , newNode){
        if(newNode.value < node.value){
            if(node.left == null){
                node.left = newNode;
            }else{
                this.insertNode(node.left , newNode)
            }
        }else{
            if(node.right == null){
                node.right = newNode;
            }else{
                this.insertNode(node.right , newNode)
            }
        }
    }

    inOrderTraversal(node = this.root){
        if(node){
            this.inOrderTraversal(node.left);
            console.log(node.value)
            this.inOrderTraversal(node.right);
        }
        return null
    }

    postOrderTraversal(node = this.root){
        if(node){
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.value)
        }
        return null
    }

    preOrderTraversal(node = this.root){
        if(node){
            console.log(node.value)
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
        return null
    }

    countNode(node = this.root){
        if(!node){
            return 0;
        }
        return 1 + this.countNode(node.left) + this.countNode(node.right);
    }

    search(value){
        return this.searchNode(this.root , value)
    }
    searchNode(node,value){
        if(node == null || node.value == value){
            return node;
        }
        if(value < node.value){
            this.searchNode(node.left , value)
        }else{
            return this.searchNode(node.right , value)
        }
    }

    levelOrderTraversal(){
        const queue = [];
        queue.push(this.root);
        while(queue.length){
            let current = queue.shift();
            console.log(current.value);
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            }
        }
    }
}
const b = new BinaryTree();
b.insert(4);
b.insert(1)
b.insert(2)
b.insert(3)
b.levelOrderTraversal()