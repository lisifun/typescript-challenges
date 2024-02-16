/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Examples:

strs = ["flower","flow","flight"]  ===>  "fl"
strs = ["dog","racecar","car"]  ===> ""
*/

function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) {
        return "";
    }

    let prefix: string = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }

        prefix = prefix.slice(0, j);

        if (prefix === "") {
            break;
        }
    }

    return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))