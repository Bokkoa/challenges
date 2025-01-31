function partitionString(s: string): number {
  
  let repString = '';
  let repetitions = 1;

  for(let i = 0; i <= s.length; i++){
    
    if(!repString.includes(s[i])) {
      repString += s[i];
    } else {
      repetitions++;
      repString = s[i];
    }
  }

  return repetitions;
};


console.log(partitionString("abacaba"))
console.log(partitionString("ssssss"))