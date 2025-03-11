export function groupAnagrams(strs: string[]): string[][] {

    const anagramGroupDict = new Map<string, string[]>();

    for(let i = 0; i < strs.length; i++){
        const currentWord = strs[i];

        const sortedWordIndex = currentWord.split('').sort().join('');

        const anagramGroupFound = anagramGroupDict.get(sortedWordIndex);

        if(anagramGroupFound != undefined){

            anagramGroupFound.push(currentWord);
            anagramGroupDict.set(sortedWordIndex, anagramGroupFound);
        } else {
            anagramGroupDict.set(sortedWordIndex, [currentWord]);
        }
    }

    const anagramGroups: string[][] = [];
    anagramGroupDict.forEach(group => anagramGroups.push(group));

    return anagramGroups;

}


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))
console.log(groupAnagrams(["", "b"]))
console.log(groupAnagrams(["ddddddddddg", "dgggggggggg"]))