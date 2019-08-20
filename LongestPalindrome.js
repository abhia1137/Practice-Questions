function LongestPalindrome(arr) {
    // const counts = {};
    // for (let c of str) {
    //     counts[c] = (counts[c] || 0) + 1;
    // }

    // let odds = 0;
    // for (let c in counts) {
    //     odds += counts[c] % 2;
    // }
    // return str.length - odds + 1
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        if (!count[arr[i]]) {
            count[arr[i]] = 1
        } else {
            count[arr[i]] += 1
        }
    };

    console.log(!!0)
        // console.log(!!0)

    let result = 0;
    for (let obj in count) {
        // console.log(count[obj] % 2)
        result += count[obj] % 2
            // console.log(result)
    }

    // console.log(result)
    return arr.length - result + !!result
};

// console.log(LongestPalindrome('LL'))
// console.log(LongestPalindrome('bb'))
// console.log(LongestPalindrome('ccc'))
// console.log(LongestPalindrome('bananas'))
console.log(LongestPalindrome('abccccdd'))
"abccccdd"