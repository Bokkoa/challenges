export function appealSum(s: string): number {
  
  let lengthPending = 1;
  let stringIndex = 0;
  let appeal = 0;


  while(lengthPending <= s.length) {


    if(stringIndex + lengthPending <= s.length){

        let slice = s.slice(stringIndex, stringIndex + lengthPending)
        
        console.log({ slice })
        appeal += new Set(slice).size
        
        stringIndex ++;
        
        if(stringIndex >= s.length){
          lengthPending ++;
          stringIndex = 0;
        }
    } else {
        lengthPending ++;
        stringIndex = 0;
    }

  }

  return appeal;

};

console.log(appealSum("abbca"))
// console.log(appealSum("code"))

// console.log(appealSum(`jffqgvjzoulfnzaniqpjlriqdogyplgteifddtnhyxbzsbyllsnhopualudvdohnypwqapuujyccjktycjccbuiglvruccoyiawjcdjlumthwyirlrxumhkfikmqrjalidgfgfmhhwxrrepqnsjlqreanvnjjdocjlajajboiyplbsvnpvwvehihenpgkypovxjoouwrqkyutkfyralbamjhjsidljspemqiytgiofaeyngztqmdpredrulhepqwrryugsvrqnuywsokyykrjdpgkftgfyroooemyvqbpfaepyhsbilmepjczjczzddasqrvlkdagotixfunwogdlhftcnnrozdjgrezgcipmuzkhinzzvtqfrpksicvlgbiozeyvgsapaxqljyyocwmoystvigczzpecyjoqqejqfnvggstaqyjtsjuvezqmzthcfynvtxwrzegkssnvnibaojbllexjzxzmepfgqpgvjgkrruwengonivmgwrauilfxdjsnywuaycnwowvykdelufbkhuxclepfelnpmkhaesvbmfrsmfbogrqyxpagglxmippfabeyilkrijzxgusblkjjjgnpzdmaoulprqleeturrpolxuxkuaxfnrhubbsqpmeecwofxfnbhhxvzoftnqsfgtlivcmufmwmwqltmhvuggflllnoniamidilprrqqprnsbjfnvdktcsulipffcxamjxtlsecoyraqexzstmdgeaytxgvzfmwcvztabkejssrqivkimgyphcaloejqfiqymfwwrhguuqgxdmqvrydjzzjwqocirukytgvgdshlcqmjtzfrektmviwgeejtvrddocgwdfliuxnhgulqyphuijxqdppoacpwxojsfbdksordrcvcgvzebnrskhjrcmyahhruopmedynccwhdh`))