function ContainsDuplicate(arr) {
    let result = {};
    for (let i = 0, len = arr.length; i < len; i++) {
        if (!result[arr[i]]) {
            result[arr[i]] = 1
        } else {
            return true
        }
    }
    return false;
};
console.log(ContainsDuplicate([1, 2, 3, 1]));