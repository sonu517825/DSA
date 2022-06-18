// [1,4,2,6,3,77,88,345,2,6795,2344,25,787]
// even , odd


function evenOdd(arr){
let even = []
let odd = []
let remain = []
helperRecuersion(arr)
    function helperRecuersion(helperArr){
        if(helperArr.length === 0){
            return
        }
        else{
           if(helperArr[0] >=0 && helperArr[0] %2 === 0){
                even.push(helperArr[0])
           }
           else  if(helperArr[0] >=0 && helperArr[0] %2 !== 0) {
               odd.push(helperArr[0])
           }
           else{
               remain.push(helperArr[0])
           }
        }
        helperRecuersion(helperArr.slice(1))
    }
    return {even , odd , remain}
}

let arr = [1,4,2,6,-567,3,77,88,345,2,-3,-01,-232,6795,2344,25,787]
let result = evenOdd(arr)
console.log(result)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          