var calPoints = function(operations) {
    const arr = []
    for(char of operations){
        if(char != 'C' && char != 'D' && char != '+'){
            let val = parseInt(char);
            arr.push(val)
        }
        if(char == 'C'){
            arr.pop()
        }else if(char == 'D'){
            let val = arr[arr.length-1]*2
            arr.push(val)
        }else if(char == '+'){
            let newval = arr[arr.length-1]+arr[arr.length-2]
            arr.push(newval)
        }
    }
    let total = arr.reduce((sum,val)=>sum+=val)
    return total;
};
console.log(calPoints(["5","2","C","D","+"]))


// var isValid = function(s) {
//     let stack = [];
//     for (let c of s) { 
//         if (c === '(' || c === '{' || c === '[') {
//             stack.push(c)
//         } else {
//             if (stack.length == null ||
//                 (c === ')' && stack[stack.length - 1] !== '(') ||
//                 (c === '}' && stack[stack.length - 1] !== '{') ||
//                 (c === ']' && stack[stack.length - 1] !== '[')) {
//                 return false;
//             }
//             stack.pop();
//         }
//     }
//     return stack.length == 0; 
// };
// console.log(isValid('([])'));