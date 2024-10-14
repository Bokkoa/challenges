export function groupAnagrams(strs: string[]): string[][] {


    const result: string[][] = [];

    const dict = {

    }
    
    for (let i = 0; i < strs.length; i++) {

        const arrStr = strs[i].split('').sort().join('');

        if (!dict[arrStr]) {
            dict[arrStr] = [strs[i]];
        } else {
            dict[arrStr].push(strs[i])
        }

    }


    let index = 0
    for(let route in dict){
        
        result[index] = dict[route];
        index++
    }

    return result
}


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))
console.log(groupAnagrams(["", "b"]))
console.log(groupAnagrams(["ddddddddddg", "dgggggggggg"]))