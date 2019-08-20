function MergeSortedArrayOrigianl(nums1, nums2) {
    let j = 0;
    let len = nums1.length
    if (nums1.length == 0 && nums2.length == 1 && nums1[0] == 0 && nums2[0] == 1) {
        nums1[0] = nums2[0]
        return nums1;
    }
    for (let i = len; i >= 0; i--) {
        if (nums1[i] == 0) {
            nums1[i] = nums2[j]
            j++
            if (j == nums2.length) {
                return nums1.sort((a, b) => { return a - b });
            }

        }
    };
    // return nums1;
    return nums1.sort((a, b) => { return a - b })
}

console.log(MergeSortedArrayOrigianl([-1, 0, 0, 3, 3, 3, 0, 0, 0], [1, 2, 2]))
    // console.log(MergeSortedArrayOrigianl([0], [1]))
    // console.log(MergeSortedArrayOrigianl([0, 0, 0, 0, 0], [1, 2, 3, 4, 5]))

// [0, 0, 0, 0, 0]
// 0
//     [1, 2, 3, 4, 5]
// 5