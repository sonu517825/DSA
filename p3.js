const maxChar = (str) => {
    let map = {}
    str.split('').forEach(element => {
        map[element] = map[element] ? map[element] + 1 : 1
    });

    let max = 0
    let maxChar = null

    for (let key in map) {
        if (map[key] > max) {
            max = map[key]
            maxChar = key
        }
    }
    return {max , maxChar}
}

const str = 'ssssoSnNuEha]]]]]]]]]'
const result = maxChar(str)
console.log(result)


