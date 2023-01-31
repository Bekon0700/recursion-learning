const arr = [5,2,1]
let sumArr = []
const subSum = (arr, indx, sum) => {
    if(indx == arr.length) {
        sumArr.push(sum)
        return
    }
    subSum(arr, indx+1, sum+arr[indx])
    subSum(arr, indx+1, sum)
}

subSum(arr, 0, 0)

console.log(sumArr.sort())