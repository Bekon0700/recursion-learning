// https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/
let arr = [2, 3, 6, 7]
let subArr = []

const cSum = (arr, indx, target, tempArr) => {
    if(indx <= arr.length && target == 0) {
        subArr.push(tempArr)
        return
    }
    if(arr[indx] > target || indx == arr.length) {
        return
    }
    
    cSum(arr, indx, target-arr[indx], [...tempArr, arr[indx]])
    cSum(arr, indx+1, target, tempArr)
}

cSum(arr, 0, 11, [])
console.log(subArr)