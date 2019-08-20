function lengthOfLastWorld(str) {
    str = str.trim()
    let lastWorld = 0
    if (str.length > 1) {
        for (let i = str.length; i > 0; i--) {
            if (str.charAt(i) == ' ') {
                return lastWorld - 1
            } else {
                lastWorld++
            }
        }
    } else {
        return str.length
    }
    return lastWorld
        // console.log(str.trim())
}
console.log(lengthOfLastWorld("Abhi Arora"))