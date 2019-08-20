function BestTimeToBuyAndSellStock(prices) {
    // let min = arr[0]
    // let max = arr[arr.length - 1];
    // let i = 1;
    // let j = arr.length - 2
    // while (i <= j) {
    //     if (arr[i] < min) {
    //         min = arr[i]
    //     }
    //     if (arr[j] > max) {
    //         max = arr[j]
    //     }
    //     j--
    //     i++
    //     // /
    // }
    // console.log
    // if (max - min > 0) {
    //     return max - min;
    // } else {
    //     return 0;
    // }

    var min = Number.MAX_SAFE_INTEGER;
    var max = 0;
    for (var i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
        console.log(min, max)
    }
    return max;

};
// console.log(BestTimeToBuyAndSellStock([2, 1]));
// console.log(BestTimeToBuyAndSellStock([3, 2, 6, 5, 0, 3]));
console.log(BestTimeToBuyAndSellStock([7, 1, 5, 3, 6, 4]));
// console.log(BestTimeToBuyAndSellStock([7, 6, 4, 3, 1]));
// console.log(BestTimeToBuyAndSellStock([10, 20, 10, 20, 11, 30]));
// console.log(BestTimeToBuyAndSellStock([1, 4, 2]));