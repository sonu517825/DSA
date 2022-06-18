// arr1 = [1,2,4,5]
// arr2 = [1,4,16 , 25]


function checkSqure(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    let map1 = {}
    let map2 = {}

    for (let ele of arr1) {
        map1[ele] = (map1[ele] || 0) + 1
    }

    for (let ele of arr2) {
        map2[ele] = (map2[ele] || 0) + 1
    }

    for (let key in map1) {
        if (!map2[key * key]) {
            return false
        }

        if (map2[key * key] !== map1[key]) {
            return false
        }
    }
    return true

}

let arr1 = [1, 2, 4, 4, 3, 1, 0, ]
let arr2 = [1, 4, 16, 16, 9, 1, 0,]

let result = checkSqure(arr1, arr2)
console.log(result)



function checkSqure2(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        let isSquare = false
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] * arr1[i] === arr2[j]) {
                isSquare = true
            }
            if (j === arr2.length - 1) {
                if (!isSquare) {
                    return false
                }
            }
        }
    }
    return true
}



let result2 = checkSqure(arr1, arr2)
console.log(result2)
