function LongestCommonPrefix(strs) {
    if (!strs || !strs.length) return ''
    strs.sort();
    let newstr = [strs[0], strs[strs.length - 1]]
    let output = ''
    let dict = {}

    for (let i = 0; i <= strs.length; i++) {
        if (newstr[0].charAt(i) == newstr[strs.length - 1].charAt(i)) {
            output += newstr[0].charAt(i)
        } else {
            break
        }
    };


    return output
};

// console.log(LongestCommonPrefix(["c", "c"]))
// console.log(LongestCommonPrefix(["flower", "flow", "flight"]))
// console.log(LongestCommonPrefix(["dog", "racecar", "car"]))
// console.log(LongestCommonPrefix(['a']))
// console.log(LongestCommonPrefix(["a", "a", "b"]))
console.log(LongestCommonPrefix(["abca", "abc"]))