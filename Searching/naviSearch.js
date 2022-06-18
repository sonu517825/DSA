//   'sonu verma lucknow'
//     'ckn'


function checkString(str, subStr) {
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < subStr.length; j++) {
            if (str[i + j] !== subStr[j]) {
                break
            }
            if (j === subStr.length - 1) {
                return true
            }
        }
    }
    return false
}


let str = 'sonu verma lucknow'
let subStr = ' luc'
let result = checkString(str, subStr)
console.log(result)
