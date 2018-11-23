function bubbleSort(unsorted) {
    for (let i = 0; i < unsorted.length - 1; i++) {
        for (j = 0; j <= unsorted.length - 1 - i -1; j++) {
            if (unsorted[j] > unsorted[j + 1]) {
                let swap = unsorted[j]
                unsorted[j] = unsorted[j + 1]
                unsorted[j + 1] = swap
            }
        }
    }
    console.log(unsorted)
}


bubbleSort([2,2,1,2,1,2,1,2])


// Time Complexity: Worst Case: O(n^2)
                //: Average Case: O(n^2)
                // : Best Case: O(n) if array is already Sorted 