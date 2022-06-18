

const uniqueSubstring = (str) => {
    if (!str) {
        throw new Error('string must be present')
    }

    let start = 0
    let end = 0
    let uniChar = new Set()

    while (end < str.length) {
        if (!uniChar.has(str[end])) {
            uniChar.add(str[end])
            end++
        }
        else {
            uniChar.delete(str[start])
            start++
        }
    }

    let result = ''
    uniChar.forEach((char) => result += char)

    return result
}

//  ctionUp 

let str = 'functionUp' // 'ssosnsug' 
const result = uniqueSubstring(str)
console.log(result)
 // nsug


