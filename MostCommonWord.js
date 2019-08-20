function MostCommonWord(str, banned) {
    let originalCount = {};
    str = str.replace(/[^a-zA-Z ]/g, " ").toLowerCase();
    str = str.trim()
    str = str.split(' ')
    let max = 0;

    for (let i = 0, len = str.length; i < len; i++) {
        if (!originalCount[str[i]] && banned.indexOf(str[i]) == -1) {
            originalCount[str[i]] = 1
        } else if (originalCount[str[i]]) {
            originalCount[str[i]] += 1

        }
    };
    let result = ''
    for (let key in originalCount) {
        if (originalCount[key] > max && key != '') {

            result = key;
            max = originalCount[key]
        }
    }
    return result;
};

// console.log(MostCommonWord('Bob hit ball, the hit BALL flew far after it was hit abhi arora is a winner, abhi is also programer.', ['hit', 'ball']))
// console.log(MostCommonWord('a', ['']))
console.log(MostCommonWord("a, a, a, a, b,b,b,c, c", ['a']))

// var str = "Bob hit a ball, the hit BALL flew far after it was hit.";
// console.log(str.replace(/[^a-zA-Z ]/g, ""))