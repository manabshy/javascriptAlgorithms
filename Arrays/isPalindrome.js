function isPalindrome( string) {
    let reversedString = '';
    for ( let i = string.length - 1; i>=0; i --) {
        reversedString += string[i];
    }
    return reversedString === string
} /*?.*/

isPalindrome('abcdcba')