function LongestIncreasingSubsequence(arr) {

    let current = arr[0];
    let next = 0;
    for (let i = 0; i < arr.length; i++) {
        next = arr[i]
        if (current > arr[i]) {
            arr.splice(i, 1);
            i--
        } else {
            current = next
        }
    }
    console.log(arr)
};

LongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80])
LongestIncreasingSubsequence([3, 2])
LongestIncreasingSubsequence([50, 3, 10, 7, 40, 80])