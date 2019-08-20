function numJewelsInStones(jewels, ihave) {
    var dict = []
    var count = 0;
    for (var i = 0; i < jewels.length; i++) {
        dict[jewels.charAt(i)] = true
    };


    for (var i = 0; i < ihave.length; i++) {
        if (dict[ihave.charAt(i)]) {
            count++
        }
    }
    return count
};

console.log(numJewelsInStones('a', 'ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZa'))