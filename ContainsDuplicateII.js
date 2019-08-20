function ContainsDuplicateII(arr, k) {
    let result = {};
    let finalResult = [];
    let index = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (!result[arr[i]]) {
            result[arr[i]] = 1
        } else {
            index.push(i);
            result[arr[i]] += 1
        }
    };

    if (Math.abs(arr.indexOf(arr[index[0]]) - index[0]) == k) {
        return true
    }
    // for (let i = 0, len = arr.length; i < len; i++) {
    //     // if(index[]){

    //     // }
    // };
    // console.log(index);
    return result;

};
console.log(ContainsDuplicateII([1, 2, 3, 1], 3));
// console.log(ContainsDuplicateII([1, 2, 3, 1, 2, 3]));