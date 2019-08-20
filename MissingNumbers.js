function MissingNumbers(n) {
    for (let i = 1; i < n.length; i++) {
        n[0] += n[i]
    }
    return (n.length * (n.length + 1) / 2) - n[0]
};

MissingNumbers([9, 6, 4, 2, 3, 5, 7, 0, 1])