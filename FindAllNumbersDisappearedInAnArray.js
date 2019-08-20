function FindAllNumbersDisappearedInAnArray(arr) {
    let result = {};
    let finalResult = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (!result[arr[i]]) {
            result[arr[i]] = 1
        }
    };
    for (let i = 1, len = arr.length; i <= len; i++) {
        if (!result[i]) {
            finalResult.push(i)
        }
    }
    return finalResult
};
console.log(FindAllNumbersDisappearedInAnArray([4, 3, 2, 7, 8, 2, 3, 1]));