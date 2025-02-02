function isPalindrome(x: number): boolean {

  if(x < 0) return false;

  let stringifiedNumber = x.toString();
  let rightPointer = stringifiedNumber.length - 1;
  let leftPointer = 0;


  let noMismatch = true;

  for(let i = 0; i < stringifiedNumber.length; i++){

    if(leftPointer === rightPointer || leftPointer > rightPointer ) {
      noMismatch = true;
      break;
    } 

    if(stringifiedNumber[leftPointer] !== stringifiedNumber[rightPointer]){
       noMismatch = false;
       break;
    }

    leftPointer ++;

    rightPointer --;

  }

  return noMismatch;

};

isPalindrome(121);