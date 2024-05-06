let ar = [3,4,5,2,1,0]

function linearRecursion(arr,val,index=0){
    if(index >= arr.lenght){
        return -1;
    }
    if(arr[index] == val){
        return index;
    }
    return linearRecursion(arr,val,index+1);
}
console.log(linearRecursion(ar , 90));