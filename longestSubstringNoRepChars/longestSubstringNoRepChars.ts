function lengthOfLongestSubstring(s: string): number {
  let currMaxStr = '';
  let prevTryStr = '';

  if (s.length <= 1) return s.length;

  for (let i = 0; i <= s.length - 1; i++) {

    if (currMaxStr.includes(s[i])) {
      
      if (prevTryStr.length < currMaxStr.length) prevTryStr = currMaxStr;
      
      const problemMatchPosition = currMaxStr.indexOf(s[i]);

      // get the rest of valid string
      currMaxStr = currMaxStr.slice(problemMatchPosition + 1) + s[i]

    } else {
      currMaxStr += s[i]
    }
  }

  return (prevTryStr.length > currMaxStr.length) ? prevTryStr.length : currMaxStr.length;

};

console.log(lengthOfLongestSubstring('abc'))
console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring(" "))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring('au'))
console.log(lengthOfLongestSubstring('dvdf'))
console.log(lengthOfLongestSubstring('anviaj'))
console.log(lengthOfLongestSubstring('aabaab!bb'))