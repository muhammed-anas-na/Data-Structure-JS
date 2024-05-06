let ar = [1,2,3,4,5,6,7]

// function binary(arr){
//     let left = 0
//     let right = arr.length-1
//     while(left<=right){
//         let mid = arr[Math.floor((left+right)/2)]
//         if(arr[mid] == 3){
//             return mid;
//         }else if(arr[mid]>3){
//             right =mid-1;
//         }else{
//             left = mid+1;
//         }
//     }

// }
// console.log(binary(ar));

function binaryRecursion(arr,value,low,high){
    if(high < low || arr.length == 0){
        return -1;
    }
    const mid = Math.floor((low+high)/2);
    if(arr[mid] == value){
        return mid;
    }
    if(arr[mid]>value){
        return binaryRecursion(arr,value,low,mid-1);
    }
    return binaryRecursion(arr,value,mid+1,high)
}
console.log(binaryRecursion(ar,7,0,ar.length))