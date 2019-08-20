function detectCapitalUse(str) {
    if (str.toUpperCase() == str || str.toLowerCase() == str) {
        return true
    }
    if (str.charAt(0) == str.charAt(0).toUpperCase()) {
        for (var i = 1; i < str.length; i++) {

            if (str.charAt(i) == str.charAt(i).toUpperCase()) {
                return false
            }
        };
        return true
    };
    return false
};

console.log(detectCapitalUse("Leetcode"))