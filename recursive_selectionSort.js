
function facorial_Recursion(value, fact, n) {
    let end = 0
    if (n >= 1) {
        end = value * fact
        fact++
        n--
        facorial_Recursion(end, fact, n)
        if (n == 0) {
            console.log(end)
        }
    }
}

facorial_Recursion(1, 1, 6)





