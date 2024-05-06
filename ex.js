function isValid(s){
  let stack = []
  for(let c of s){
    if(c=='(' && c=='{' && c=='['){
      stack.push(c)
    }else{
      if(stack.length == null || 
        (c==')' && stack[stack.length-1] != '(')||
        (c=='}' && stack[stack.length-1] != '{')||
        (c==']' && stack[stack.length-1] != '[')){
          return false;
        }
    }
    stack.pop()
  }

  return stack.length == 0;
}

    // delMid(){
    //     let mid = Math.floor(this.stack.length/2);
    //     let arr = [];
    //     for(let i=this.stack.length-1;i>mid;i--){
    //         arr.push(this.stack[i])
    //         this.stack.pop()
    //     }
    //     console.log(arr);
    //     this.stack.pop()
    //     for(let i = arr.length-1 ;i>=0;i--){
    //         this.stack.push(arr[i])
    //     }
    // }