function aloneElement(str) {

    let dict = {};
    for (let i = 0; i < str.length; i++) {
        if (!dict[str[i]]) {
            dict[str[i]] = 1
        } else {
            delete dict[str[i]]
        }
    }
    return Object.keys(dict)[0];
};

console.log(aloneElement());