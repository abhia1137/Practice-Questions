function PowerOfThree(digit) {
    // if (digit < 1) return false;
    // if (digit == 1) return true;
    // if (digit == 0) return false;
    // if (digit % 4 != 0) return false;
    if (digit < 1) return false;

    let saved = digit;
    while (digit != 1) {
        digit /= 4
        if (saved == digit || digit == 3 || digit == 2 || digit == 5 || digit == 0) return false;
    }
    return true
};

console.log(PowerOfThree(1))