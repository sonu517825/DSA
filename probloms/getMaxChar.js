

function getMaxChar(str) {
    const map = {}
    str.split('').forEach(element => {
        map[element] = map[element] ? map[element] + 1 : 1
    });

    let max = 0
    let maxChar = null
    for(let k in map){
        if(map[k]>max){
            max = map[k]
            maxChar = k
        }
    }
    return {max , maxChar}
}


const res = getMaxChar('lovelovl@@@@@@@e')

console.log(res)