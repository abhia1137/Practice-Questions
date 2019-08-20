function FirstUniqueCharacterInAString(str) {
    let dict = {};
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        if (!dict[str[i]]) {
            dict[str[i]] = 1;
        } else {
            dict[str[i]] = dict[str[i]] + 1
        };
    }
    for (let key in dict) {
        if (dict[key] == 1) {
            return str.indexOf(key)
        }
    }
    return -1
};

// O(n+m+n)

console.log(FirstUniqueCharacterInAString('leetcode'))
    // console.log(FirstUniqueCharacterInAString(''))
    // console.log(FirstUniqueCharacterInAString("loveleetcode"))
    //     console.log(FirstUniqueCharacterInAString("dddccdbba"))