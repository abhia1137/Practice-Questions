function permutation(string) {
    if (string.length < 2) return string;
    var permutations = [];
    for (var i = 0; i < string.length; i++) {
        var char = string[i];
        var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);
        console.log('remainingString', remainingString)
        for (var subPermutation of permutation(remainingString))
            permutations.push(char + subPermutation)

    }
    return permutations;
}
var myString = "xyz";
permutations = permutation(myString);
for (permutation of permutations) {
    console.log(permutation)
}
 

function stringPermutations(str) {
    let letters = str.split(''),
        results = [
            [letters.shift()]
        ]

    while (letters.length) {
        const currLetter = letters.shift()
        console.log(currLetter)
        let tmpResults = []
        results.forEach(result => {
            let rIdx = 0
            while (rIdx <= result.length) {
                const tmp = [...result]
                tmp.splice(rIdx, 0, currLetter)
                tmpResults.push(tmp)
                rIdx++
            }
        })
        results = tmpResults
    }

    // return results;
    // return results
    //     .map(letterArray => letterArray.join(''))
    //     .filter((el, idx, self) => (self.indexOf(el) === idx))
    //     .sort()
}

console.log(stringPermutations('xyz'))