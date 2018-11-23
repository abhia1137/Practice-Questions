function chocolateFeast(amount, price, discount) {

    var result = 0;
    var bought = parseInt(amount / price);
    result += bought;
    var wrappers = bought;

    while(wrappers >= discount) {
        var freeChoco = parseInt(wrappers / discount);

        result += freeChoco;
        wrappers = wrappers - freeChoco * discount + freeChoco;
    }


    
    return result
    // console.log(result)
}
chocolateFeast(6, 2, 2)