const arr = [3,2,1]
let sumArr = []
let r = []
const subSum = (arr, indx, fArr) => {
    if(indx == arr.length) {
        sumArr.push(fArr)
        return
    }
    console.log(indx, typeof fArr)
    subSum(arr, indx+1, [...fArr, arr[indx]])
    subSum(arr, indx+1, fArr)
}

subSum(arr, 0, [])

console.log(sumArr.sort())