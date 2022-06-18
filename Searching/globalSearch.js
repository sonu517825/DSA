let res = []

function globalSearch(arr , ele , s , e){
    if(arr.length===s){
        return res
    }
    if(arr[s] === ele){
     res.push(ele)
    }
    return globalSearch(arr , ele , s+1 , e)
}

let arr = [1,2,4,3,4,5,-3,-0,5,0.33,0,4,1,6,454,656,5654,454,1.44]
let ele = 4

let result = globalSearch(arr , ele , 0 , arr.length)
console.log(result)