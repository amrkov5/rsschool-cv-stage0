function mergeArrays(arr1, arr2) {
    let merged = []
    let res = arr1.concat(arr2) .sort((a,b) => {return a-b}) 
    // console.log(merged.length)
    for (let i = 0; i<res.length; i++) {
        if (res[i] !== res[i+1]) {
            merged.push(res[i])
        }

    }
    console.log(merged)
    return merged
  }

  mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12])