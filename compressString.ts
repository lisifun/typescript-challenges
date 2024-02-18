/*
Write a function that compresses a string by replacing sequences of the same character with that character followed by the count of repeated characters. If the "compressed" string would not become smaller than the original string, your function should return the original string. You can assume the string only contains uppercase and lowercase letters (a - z).

Requirements:
The function should be named compressString.
Input will be a non-empty string.
The function should return the compressed string if the compressed version is shorter than the original string; otherwise, return the original string.

compressString("aabcccccaaa") // should return "a2b1c5a3"
compressString("abcdef") // should return "abcdef" (since compression does not reduce the size)
*/


function compressString(str : string):string | undefined {
    let count: number = 0;
    let strResult = ''
    let referenceChar = str[0]

    for (let i = 0; i < str.length; i++) {
        let char:string = str[i]

        if (char === referenceChar) {
            count++
        } else {
            strResult += `${str[i-1]}${count}`
            count = 1
            referenceChar = str[i]
        }

    }

    strResult += `${str[str.length - 1]}${count}`

  
    return strResult.length > str.length ? str : strResult


}


console.log(compressString("aabcccccaaa"))
console.log(compressString("abcdefffg"))