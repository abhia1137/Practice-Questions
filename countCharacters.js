function countCharacters(words, chars) {
    let dict = {}
    let length = 0;
    let combined = {}
    let original = {}
    let newChar = chars

    original = Object.assign(dict)
    for (let i = 0; i < words.length; i++) {
        dict = frequency(newChar)
        combined = IndividualWorld(dict, words[i], chars);
        if (combined) {
            length += words[i].length
        }
    }
    return length
};

function frequency(chars) {
    let dict = {}
    for (let i = 0; i < chars.length; i++) {
        if (!dict[chars.charAt(i)]) dict[chars.charAt(i)] = 1
        else dict[chars.charAt(i)] += 1
    }
    return dict;
}

function IndividualWorld(dict, individual, chars) {
    for (let i = 0; i < individual.length; i++) {
        if (!dict[individual.charAt(i)]) {
            return false
        } else {
            dict[individual.charAt(i)] -= 1
        }
    }
    return true;
}

console.log(countCharacters(["cat", "bt", "hat", "tree"], 'atach'))
console.log(countCharacters(["hello", "world", "leetcode"], 'welldonehoneyr'))
console.log(countCharacters(["dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin", "ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb", "ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl", "boygirdlggnh", "xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx", "nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop", "hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx", "juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr", "lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo", "oxgaskztzroxuntiwlfyufddl", "tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp", "qnagrpfzlyrouolqquytwnwnsqnmuzphne", "eeilfdaookieawrrbvtnqfzcricvhpiv", "sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz", "yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue", "hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv", "cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo", "teyygdmmyadppuopvqdodaczob", "qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs", "qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs"], "usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp"))
    // usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp
    // boygirdlggnh
    // dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin