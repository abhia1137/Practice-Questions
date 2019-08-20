function addDigits(num) {
    // let divideDigit = 10

    // if (number >= 100) {
    //     divideDigit = 100
    // }

    // let element = (number % divideDigit) + Math.floor(number / divideDigit);

    // if (element >= 10) {
    //     element = element % 10 + Math.floor(element / 10)
    // }


    // return element

    if (isNaN(num) || num === 0) return 0;
    if (num < 10) return num;
    return num % 9 === 0 ? 9 : num % 9;
};

console.log(addDigits(1111))


// let element = number % 100 + Math.floor(number / 100