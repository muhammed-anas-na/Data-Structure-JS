// function heapSort(){
//     for(let i = this.data.length-1;i>0;i--){
//         swap(i,0);
//         maxHeapify(i,0)
//     }
// }

// function maxHeapify(heapSize,rootIndex){
//     let left = 2*rootIndex+1;
//     let right = 2*rootIndex+2;
//     let LargestIndex = rootIndex;

//     if(left<heapSize && this.data[left] > this.data[LargestIndex]){
//         LargestIndex = rootIndex;
//     }
//     if(right<heapSize && this.data[right] > this.data[LargestIndex]){
//         LargestIndex = rootIndex;
//     }
//     if(rootIndex != LargestIndex){
//         swap(rootIndex,LargestIndex);
//         maxHeapify(heapSize,LargestIndex);
//     }
// }


// class Heap{
//     constructor(){
//         this.data = [];
//     }
//     push(value){
//         this.data[this.data.length] = value;
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let currentIndex = this.data.length-1;
//         while(this.data[currentIndex] > this.data[getparesnt(currentIndes)]){
//             this.swap(currentIndex,getParent(currentIndex))
//             currentIndex = this.getPargent(currentIndex);
//         }
//     }
// }


function totalNodes(root){
    if(root == null){
        return 0;
    }

    let l = totalNodes(root.left);
    let r = totalNodes(root.right);

    return 1+l+r;
}

function isBst(){
    if(root == null){
        return  true;
    }
    if(
        checkBst(root.left,0,root.data)&&
        checkBst(root.right,root.data,Number.MAX_SAFE_INTEGER)
    ){
        return true;
    }
    return false;
}
function checkBst(root,min,max){
    if(root==null){
        return true;
    }
    if(root.data>min &&root.data<max){
        return(
            checkBst(root.left,min,root.data)&&
            checkBst(root.right,root.data,max)
        )
    }
}


class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Bst{
    constructor(){
        this.root = mull;
    }

    insert(){
        let newNode = new Node()
        if(this.root == null){
            this.root = newNode
        }else{
            insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left == null){
                root.left = newNode;
            }else{
                this.insertNode(root.left,newNode)
            }
        }
    }

    levelOrder(){
        let queue = [];
        queue.push(this.root);
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }


}


class Graph{
    constructor(){
        this.adjecencyList = {}
    }


    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjecencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjecencyList[vertex1].add(vertex2);
        this.adjecencyList[vertex1].add(vertex2)
    }

    removeEdge(vertex1,vertex2){
        this.adjecencyList[vertex1].delete(vertex2);
        this.adjecencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex){
        if(!this.adjecencyList[vertex]){
            return;
        }
        for(let djecentVertex of this.adjecencyList[vertex]){
            this.removeEdge(vertex,adjecentVertex)
        }
        delete this.adjecencyList[vertex];
    }
}


let Node= function(){
    this.key = new Map();
    this.end = false;
    this.setEnd = function{
        this.end = true;
    }
}
let Trie = function(){
    this.root = new Node();
    this.add(input,node = this.root){
        if(input.length == 0){
            return
        }else if(node.keys.has(input[0] == null)){
            node.keys.set(input[0],new Node());
            
        }
    }
}
