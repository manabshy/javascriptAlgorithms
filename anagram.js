
// Group Anagrams together
// Anagrams are strings made up of exactly the same letters, where order doesn't matter
//  Input  "words": ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
//  Output : ['yo', 'act', 'flop', 'foo']

function groupAnagrams(words) {
    const anagrams = {};
    let myList = [];
    for (const word of words) {
        const sortedWords = word.split('').sort().join('');
        console.log(sortedWords);
        if (sortedWords in anagrams) {
            anagrams[sortedWords].push(word);
        } else {
            anagrams[sortedWords] = [word];
        }
    }
    console.log(Object.values(anagrams));
    for ( const oneword of Object.values(anagrams)) {
        console.log(oneword[0]);
        myList.push(oneword[0]);
    }
    console.log('myList::',myList);
}

groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"])