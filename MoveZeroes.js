function MoveZeroes(elements) {

    let concat = [];
    let zeroCount = 0;
    for (let i = 0; i < elements.length; i++) {
        if (elements[i] != 0) {
            concat.push(elements[i]);
        } else {
            zeroCount++
        }
    }

    for (let i = 0; i < zeroCount; i++) {
        concat.push(0)
    }
    return concat
};
console.log(MoveZeroes([0, 1, 0, 3, 12]))
console.log(MoveZeroes([0, 0, 1]))