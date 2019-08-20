function NondecreasingArray(num) {
    // let sum = 1;
    // for (let i = 2, stop = Math.sqrt(num); i <= stop; i++) {
    //     if (num % i === 0) sum += i;
    // }
    // return num > 1 && sum === num;


    // console.log(Math.sqrt(28))
    let sum = 1;
    for (let i = 2; i < num / 2; i++) {
        if (num % i == 0) {
            sum += i
        }
    }
    return num > 1 && (sum * 2) == num;
};

console.log(NondecreasingArray(28));