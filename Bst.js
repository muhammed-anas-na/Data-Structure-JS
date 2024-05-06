class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Bst{
    constructor(){
        this.root = null;
    }

    isEmpty(){return this.root == null}

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
          this.root = newNode;
        } else {
          this.insertNode(this.root, newNode);  
        }
      }
    insertNode(root, newNode) {
        if(root.value == newNode.value){
            return;
        }
        if (newNode.value < root.value) {
          if (root.left === null) {
            root.left = newNode;
          } else {
            this.insertNode(root.left, newNode);
          }
        } else {
          if (root.right === null) {
            root.right = newNode;
          } else {
            this.insertNode(root.right, newNode);
          }
        }
      }

    search(root,value){
        if(!root){
            return false;
        }else{
            if(root.value == value){
                return true;
            }else if(value < root.value){
                return this.search(root.left , value)
            }else{
                return this.search(root.right,value)
            }
        }

    }
    //Depth First Search----------------------- 
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right)
        }

    }
    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
    //Breath First Search------------------------------
    levelOrder(){
        const queue = [];
        queue.push(this.root);
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(root.left==null){
            return root.left;
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(root.right==null){
            return root.right
        }else{
            return this.max(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root,value);
    }
    deleteNode(root,value){
        if(root == null){
            return root;
        }
        if(value<root.value){
            root.left = this.deleteNode(root.left,value);
        }else if(value>root.value){
            root.right = this.deleteNode(root.right,value);
        }else{
            if(!root.left && ! root.right){
                return null;
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right,root.value);
        }
        return root;
    }

    checkBST(root, min, max) {
        if (root == null) {
            return true;
        }
        if (root.data > min && root.data < max) {
            return (
                this.checkBST(root.left, min, root.data) &&
                this.checkBST(root.right, root.data, max)
            );
        }
        
        return false;
    }
    
    isBST(root) {
        if (root == null) {
            return true;
        }
        if (
            this.checkBST(root.left, 0, root.data) &&
            this.checkBST(root.right, root.data, Number.MAX_SAFE_INTEGER)
        ) {
            return true;
        }
        
        return false;
    }
    totalNodes(root) {
        if (root === null) {
            return 0;
        }

        let l = this.totalNodes(root.left);
        let r = this.totalNodes(root.right);
        console.log(l +' '+ r)
        return 1 + l + r;
    }

}
let b = new Bst()
b.insert(10)
b.insert(5)
b.insert(15)
b.insert(10);
b.insert(12);
b.insert(15);
b.levelOrder()
// console.log(b.totalNodes(b.root))