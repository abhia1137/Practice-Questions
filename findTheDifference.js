'use strict'

function findTheDifference(initial, after) {
    // let dict = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26 }

    // let sumInitial = 0;
    // let sumafter = 0;
    // for (let i = 0; i < after.length; i++) {
    //     if (initial.charAt(i)) {
    //         sumInitial += dict[initial.charAt(i)]
    //     }
    //     if (after.charAt(i)) {
    //         sumafter += dict[after.charAt(i)]
    //     }
    // }
    // return Object.keys(dict)[(sumafter - sumInitial) - 1]


    let combinedStr = initial + after;
    combinedStr = combinedStr.split('');
    combinedStr.sort();

    for (let i = 0; i < combinedStr.length; i = i + 2) {
        if (combinedStr[i] != combinedStr[i + 1]) {
            return combinedStr[i]
        }
    }
};

console.log(findTheDifference('ae', 'aae'))
    // console.log(findTheDifference('abcd', 'abecd'))