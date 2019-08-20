function LetterCombinationsOfAPhoneNumber(digits) {
    if (!digits) return []
    let dict = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
    let multiarray = [];
    for (let i = 0; i < digits.length; i++) {
        multiarray.push(dict[digits.charAt(i)].split(''));
    }
    let start = multiarray[0];
    let second = [];
    if (digits.length == 1) return dict[digits].split('');
    for (let i = 1; i < digits.length; i++) {
        second = multiarray[i];
        if (start && second) {
            start = combinations(start, second);
        }
    }
    return start;
};

function combinations(start, second) {
    let result = [];
    start.map(p => {
        second.map(q => {
            result.push(p + q);
        })
    })
    return result
}

console.log(LetterCombinationsOfAPhoneNumber('22'))