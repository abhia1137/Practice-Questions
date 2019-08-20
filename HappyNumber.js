function HappyNumber(number) {
    let origianal = number;
    let check = {};
    while (origianal > 1 && origianal != 1) {
        origianal = sum(origianal)
        if (origianal == 4) {
            return false
        }
    };
    return true
};

function sum(number) {
    number = number.toString().split('');
    let result = 0;
    for (let i = 0; i < number.length; i++) {
        number[i] = parseInt(number[i]);
        result += number[i] * number[i];
    };
    return result;
};


console.log(HappyNumber(12));