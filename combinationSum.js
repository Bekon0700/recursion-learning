let arr = [2, 1, 3]
const target = 7
let subArr = []

// const cSum = (arr, indx, tempArr, sum) => {
//     if(indx == arr.length) {
//         const r = target-sum
//         console.log('***'+sum + '\t' + r + '\t'+ [...tempArr])
//         if(sum <= target && arr.includes(r)) {
//             console.log(sum + '\t' + r)
//             subArr.push([...tempArr, r])
//         }
//         return
//     }

//     cSum(arr, indx+1, [...tempArr, arr[indx]], sum+arr[indx])
//     cSum(arr, indx+1, [...tempArr], sum)
// }

// cSum(arr, 0, [], 0)

// console.log(subArr)

const cSum = (arr, indx, target, tempArr) => {
    if(indx == arr.length || target == 0) {
        subArr.push(tempArr)
        return
    }
    if(arr[indx] > target) {
        return
    }
    
    
    console.log(indx+'\t'+arr[indx]+'\t'+target)
    console.log(tempArr)
    cSum(arr, indx, target-arr[indx], [...tempArr, arr[indx]])
    cSum(arr, indx+1, target, tempArr)
}

cSum(arr, 0, 7, [])
console.log(subArr)