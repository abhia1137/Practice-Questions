function BuddyStrings(A, B) {
    // let diffOne = '';
    // let dict = {}
    // dict[first.charAt(0)] = 1
    // if (first == '' || second == '') return false;
    // if (first == second) {
    //     for (let i = 0; i < first.length; i++) {
    //         if (dict[first.charAt(i)]) {
    //             dict[first.charAt(i)] = 1
    //         } else {
    //             return false;
    //         }
    //     }
    // }

    // first = first.split('');
    // for (let i = 0; i < first.length; i++) {
    //     if (first[i] != second.charAt(i)) {
    //         diffOne += first[i]
    //     }
    // }
    // if (diffOne.length > 2) return false
    // return true
    if (A.length != B.length)
        return false
    let fst = -1,
        sec = -1,
        cnt = 0
    for (let i = 0; i < A.length; i++) {
        if (A[i] != B[i]) {
            if (fst == -1)
                fst = i
            else
                sec = i
            cnt++
        }
    }

    if (cnt == 0) {
        let s = new Set(A.split(''))
        return s.size < A.length
    }
    if (cnt != 2)
        return false
    return A[fst] == B[sec] && A[sec] == B[fst]
};

console.log(BuddyStrings('aaaaaaabc', 'aaaaaaacb'));
// console.log(BuddyStrings('ab', 'ab'));
// console.log(BuddyStrings('ab', 'ba'));
// console.log(BuddyStrings('aa', 'aa'));
// console.log(BuddyStrings('', 'aa'));


// console.log(BuddyStrings("abcd", "badc"))
// console.log(BuddyStrings("abcaa", "abcbb"))