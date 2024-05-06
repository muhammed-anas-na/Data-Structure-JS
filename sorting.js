const arr = [1,54,34,6,7,3,34,20,0]

//SelectionSort
function SelectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min_index = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[min_index]>arr[j]) min_index = j;
        }

        if(min_index!=i){
            let temp = arr[min_index]
            arr[min_index] = arr[i]
            arr[i] = temp
        }
    }
    return arr;
}
SelectionSort(arr);
console.log(arr);

// Bubble Sort
function BubbleSort(arr){
    let len = arr.length;
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp;
            }
        }
    }
}
BubbleSort(arr)
console.log(arr)

// Insertion Sort
function InsertionSOrt(arr){
    let len = arr.length;
    for(let i=1;i<len;i++){
        let current = arr[i]
        let j = i-1;
        while(j>=0 && arr[j]>current){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}
InsertionSOrt(arr)
console.log(arr)

//QuickSort
function quickSort(arr){
    if(arr.length<2) return arr;
    let piv = arr[arr.length-1]
    let left = []
    let right = []
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<piv){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),piv,...quickSort(right)]
}
console.log(quickSort(arr));
// Merge Sort
function mergesort(arr) {
    if (arr.length < 2) {
      return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergesort(leftArr), mergesort(rightArr))
  }

  function merge(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift())
      } else {
        sortedArr.push(rightArr.shift())
      }
    }
    const resultArr = [...sortedArr, ...leftArr, ...rightArr]
    return resultArr
  }
console.log(mergesort(arr));