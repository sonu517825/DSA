
function lengthOfSubstr(str) {
    if (!str) {
        return 0
    }
    let end = 0
    let start = 0
    let maxLen = 0

    const uniChar = new Set()
    while (end < str.length) {
        if (!uniChar.has(str[end])) {
            uniChar.add(str[end])
            end++
            maxLen = Math.max(maxLen, uniChar.size)
        }
        else {
            uniChar.delete(str[start])
            start++
        }
    }
    return maxLen
}

const res = lengthOfSubstr('abcabcbb')
console.log(res)