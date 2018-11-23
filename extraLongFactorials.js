function extraLongFactorials(n) {
    let fact = 1
    let c
    for (c = 1; c <= n; c++) {
        fact = fact * c;
    }

    // return fact;
    console.log(fact)
}

extraLongFactorials(25)