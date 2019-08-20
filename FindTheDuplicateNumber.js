function FindTheDuplicateNumber(elements) {
    let finder = 0
    for (let i = 0; i < elements.length; i++) {
        finder = elements.splice(i, 1)
        if (elements.indexOf(finder[0]) != -1) {
            return finder[0]
        }

    }
};


console.log(FindTheDuplicateNumber([3, 1, 3, 4, 2]))

console.log(FindTheDuplicateNumber([2, 2, 2, 2, 2]))
console.log(FindTheDuplicateNumber([1, 1, 2]))
console.log(FindTheDuplicateNumber([1, 3, 4, 2, 2]))
console.log(FindTheDuplicateNumber([3, 3, 3]))
console.log(FindTheDuplicateNumber([1, 4, 4, 2, 4]))






//  You must not modify the array(assume the array is read only).
//  You must use only constant, O(1) extra space.
//  Your runtime complexity should be less than O(n2).
//  There is only one duplicate number in the array, but it could be repeated more than once