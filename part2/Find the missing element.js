function findMissing(arr1, arr2) {
    let result
    arr1.forEach(element => {
        // console.log(element)
        // console.log('arr_filter1',arr1.filter((el) => element == el).length)
        // console.log('arr_filter2',arr2.filter((elem) => element == elem).length)
        if (arr1.filter((el) => element == el).length !== arr2.filter((elem) => element == elem).length) {
            result = element
        }
    });
    return result
}

arr1 = [1, 2, 3]
arr2 = [1, 3]
findMissing(arr1, arr2)