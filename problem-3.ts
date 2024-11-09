{
    // 
    const countWordOccurrences = (sentence:string, word:string )=>{
        const lowerCaseSentence = sentence.toLowerCase();
        const lowerCaseWord = word.toLowerCase();

        const words = lowerCaseSentence.split(' ');
        let count =0;
        for(let word of words){
            if(word === lowerCaseWord){
                count= count +1;
            }
        }
        return count;
    }
    console.log(countWordOccurrences("I love typescript", "typescript"))
}