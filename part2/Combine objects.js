function combine(...objArr) {
    console.log(objArr)
    const resObj = {}
    objArr.forEach(element => {
        for (key in element) {
            if (key in resObj) {
                resObj[key] = resObj[key] + element[key]
            } else {
                resObj[key] = element[key]
            }
        }
    });
    console.log(resObj)

    return resObj
}

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

combine(objA, objB, objC,objD) 