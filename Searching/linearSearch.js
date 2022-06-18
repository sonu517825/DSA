function search(arr , ele , s , e){
    console.log(s)
    if(arr[s] === ele) return s
    return search(arr , ele , s+1 , e)
}

let arr = [1,2,3,4,5]
let ele = 4

let result = search(arr , ele , 0 , arr.length)
console.log(result)