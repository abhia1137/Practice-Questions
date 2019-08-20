function maximumSubarray(array) {
    let max_ending_here = max_so_far = 0
    if (array.length > 1) {
        for (let i = 0; i < array.length; i++) {
            max_ending_here = max_ending_here + array[i]
            if (max_ending_here < 0) {
                max_ending_here = 0
            }

            if (max_so_far < max_ending_here) {
                max_so_far = max_ending_here
            }
        }
    } else {
        return array[0]
    }
    if ((max_ending_here || max_so_far) > 0) {
        if (max_ending_here > max_so_far) {
            return max_ending_here
        } else if (max_ending_here < max_so_far) {
            return max_so_far
        } else {
            return max_ending_here
        }
    } else {
        return Math.max.apply(null, array)
    }
}

// 9540097809 Ankur LVB

maximumSubarray([-2, -3, 4, -1, -2, 1, 5, -3])