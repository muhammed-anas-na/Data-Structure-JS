function SelectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min_idx = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[min_idx] > arr[j]){
                min_idx = j;
            }
        }

        if(min_idx != i){
            let temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }

    }
    return arr;
}

console.log(SelectionSort([7,5,4,3,2,1]))