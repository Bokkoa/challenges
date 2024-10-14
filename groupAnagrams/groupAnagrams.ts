export function groupAnagrams(strs: string[]): string[][] {
    

    const repeatGroups:string[][] = [];

    for(let i = 0; i < strs.length; i++){
        
        let isAnagram = false;

        
        for(let j = 0; j < repeatGroups.length; j++){
            
            // same length to first ambassador
            if(strs[i].length === repeatGroups[j][0].length){
                isAnagram = true;

                let groupWordRepetitions = {

                }

                let newWordRepetitions = {

                }

                for(let word of repeatGroups[j][0]){
                    if(groupWordRepetitions[word]){
                        groupWordRepetitions[word] += 1
                    } else {
                        groupWordRepetitions[word] = 1
                    }
                }

                for(let word of strs[i]){
                    if(newWordRepetitions[word]){
                        newWordRepetitions[word] += 1
                    } else {
                        newWordRepetitions[word] = 1
                    }
                }

                for(let word in newWordRepetitions){
                    if(newWordRepetitions[word] != groupWordRepetitions[word]){
                        isAnagram = false
                        break;
                    }
                }

              
                if(isAnagram) {
                     repeatGroups[j].push(strs[i]); 
                     break;
                }

            }
            
        }

        if(!isAnagram) repeatGroups.push([strs[i]])
    }

    return repeatGroups

}


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))
console.log(groupAnagrams(["","b"]))
console.log(groupAnagrams(["ddddddddddg","dgggggggggg"]))