// check anagram or not

function checkAnagram(str1 , str2){
    if(str1.length !== str2.length){
        return false
    }

    let mapCount = {}

    for(let letter of str1){
        mapCount[letter] = ( mapCount[letter] || 0 ) + 1
    }

    for(let letter of str2){
        if(!mapCount[letter]){
            return false
        }
        mapCount[letter] -= 1
    }

    return true
}



let str1 = 'sonku'
let str2 = 'suoni'

let result = checkAnagram(str1 , str2)

console.log(result)