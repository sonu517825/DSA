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
    let lenStr = str.length
    let lenSubStr = subStr.length
    let lps = calculateLpsTable(subStr)
    let i=0
    let j=0
    while(i<lenStr){
        if(str[i]===subStr[j]){
            i++
            j++
        }else{
            if (j !== 0) {
                j = lps[j - 1]
            }
            else {
                i++
            }            
        }
        if(j===lenSubStr){
            return true
        }
    }
    return false
}


let str = 'abakabcjabacklabagabac'
let subStr = 'abazc'
let result = searchSubstr(str,subStr)
console.log(result)


