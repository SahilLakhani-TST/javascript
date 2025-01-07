let isEmpty=false;
let stackOverflow=true;

if(isEmpty || stackOverflow) {
    console.log("Error");
}

// if(isEmpty) console.log("The stack is Empty");
if(stackOverflow) console.log("The stack Overflowed");

if(!isEmpty) {
    console.log("Stack has atleast one element pop() operation is valid");
}