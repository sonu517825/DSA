// LPS Table  => Longest prefix suffix table


function calculateLpsTable(subStr) {
    let lps = new Array(subStr.length).fill(0)
    let i = 1
    let j = 0
    while (i < subStr.length) {
        if (subStr[j] === subStr[i]) {
            lps[i] = j + 1
            i++
            j++
        } else {
            if (j !== 0) {
                j = lps[j - 1]
            }
            else {
                i++
            }
        }
    }
    return lps
}




function searchSubstr(str , subStr){
    
}


let subStr = 'aabaaac'
let result = calculateLpsTable(subStr)
console.log(result)


