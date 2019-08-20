function ImplementstrStr(heystack, needle) {
    if (heystack == '' && needle == '') {
        return 0
    }

    if (!needle) {
        return 0
    }
    if (!heystack) {
        return -1
    }
    return heystack.indexOf(needle)
}

console.log(ImplementstrStr('', 'a'))

"mississippi"
"issipi"
"mississippi"
"issip"