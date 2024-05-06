class Heap{
    constructor(){
        this.data = [];
    }
    getParents(i){
        return ((i-1)/2)
    }
    getLeftChild(i){
        return 2*i+1;
    }
    getRIghtChild(i){
        return 2*i+2;
    }
    swap(i1,i2){
        let temp = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = temp;
    }
    push(value){
        this.data[this.data.length] = value;
        this.heapifyUp();
    }
    heapifyUp(){
        let currentIndex = this.data.length-1;
        while(this.data[currentIndex]>this.data[this.getParents(currentIndex)]){
            this.swap(currentIndex , this.getParents(currentIndex))
            currentIndex = this.getParents(currentIndex);
        }
    }

    poll(){
        const maxValue = this.data[0];
        this.data[0] = this.data[this.data.length-1];
        this.data.length--;
        this.heapifyDown();
        return maxValue;
    }
    heapifyDown(){
        let currentIndex = 0;
        while(this.data[this.getLeftChild(currentIndex)]){
            let biggestChildIndex = this.getLeftChild(currentIndex);

            if(this.data[this.getRIghtChild(currentIndex)] &&
            this.data[this.getRIghtChild(currentIndex)] > 
            this.data[this.getLeftChild(currentIndex)]){
                biggestChildIndex = this.getRIghtChild(currentIndex)
            }

            if(this.data[currentIndex] < this.data[biggestChildIndex]){
                this.swap(currentIndex,biggestChildIndex)
                currentIndex = biggestChildIndex; 
            }else{
                return;
            }
        }
    }

    heapSort() {
        const n = this.data.length;
        //  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        //   this.maxHeapify(n, i);
        // }

        for (let i = n - 1; i > 0; i--) {
          this.swap(0, i);
          this.maxHeapify(i, 0);
        }
    
        return this.data;
      }
      maxHeapify(heapSize, rootIndex) {
        const leftIndex = 2 * rootIndex + 1; 
        const rightIndex = 2 * rootIndex + 2;
        let largestIndex = rootIndex;

        if (leftIndex < heapSize && this.data[leftIndex] > this.data[largestIndex]) {
          largestIndex = leftIndex;
        }
    
        if (rightIndex < heapSize && this.data[rightIndex] > this.data[largestIndex]) {
          largestIndex = rightIndex;
        }
    
        if (largestIndex !== rootIndex) {
          this.swap(rootIndex, largestIndex);
          this.maxHeapify(heapSize, largestIndex);
        }
    }
    
}

let h = new Heap();
h.push(10)
h.push(12)
h.push(22)
h.push(30)
h.push(1)
h.heapSort()
console.log(h.data);