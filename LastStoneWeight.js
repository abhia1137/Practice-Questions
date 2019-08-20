function LastStoneWeight(stones) {
    if (stones.length == 0) return 0
    let x = 0;
    let y = 0;
    let length = stones.length - 1
    stones.sort((a, b) => { return a - b });
    for (let i = 0; i < length; i++) {
        x = stones[stones.length - i - 2];
        y = stones[stones.length - i - 1];
        if ((x && y) != 0 && x == y) {
            x = 0;
            y = 0;
        } else {
            y = Math.abs(y - x);
            x = 0;
        }
        stones[stones.length - i - 2] = x;
        stones[stones.length - i - 1] = y;
        stones.sort((a, b) => { return a - b });
    };

    return stones.pop()
};

console.log(LastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(LastStoneWeight([1]));
console.log(LastStoneWeight([]));
console.log(LastStoneWeight([31, 26, 33, 21, 40]));
console.log(LastStoneWeight([1, 1, 4, 2, 2]));