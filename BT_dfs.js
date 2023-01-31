let arr = [4, 5, 68, 7, 9, 456, 625, 40, 35]

// pre order
const pre_dfs = (arr, i) => {
    if(i > arr.length-1) {
        return;
    }

    console.log(i, arr[i])
    pre_dfs(arr, 2*i+1)
    pre_dfs(arr, 2*i+2)
}

// in order
const in_dfs = (arr, i) => {
    if(i > arr.length-1) {
        return;
    }

    in_dfs(arr, 2*i+1)
    console.log(i, arr[i])
    in_dfs(arr, 2*i+2)
}


// post order
const post_dfs = (arr, i) => {
    if(i > arr.length-1) {
        return;
    }

    post_dfs(arr, 2*i+1)
    post_dfs(arr, 2*i+2)
    console.log(i, arr[i])
}

post_dfs(arr, 0)

