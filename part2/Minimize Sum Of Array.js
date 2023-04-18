function minSum(arr) {
    let result = 0
    arr.sort((a,b)=>a-b)
    for (let i = 0; i < arr.length/2; i++) {
        result += arr[i] * arr[arr.length-1-i]
    }
    return result
}

minSum([12,6,10,26,3,24])