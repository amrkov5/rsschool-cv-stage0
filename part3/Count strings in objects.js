function strCount(obj){
    // console.log(obj)
    let result = 0
    for (let key in obj) {
        // console.log(obj[key], result)
        if (typeof obj[key] == 'string') {
            // console.log(obj[key], result)
            result++
        } 
        if (typeof obj[key] == 'array' || typeof obj[key] == 'object') {
           result += strCount(obj[key])
        }
    }
    console.log(result)
    return result
    
}
// let result = 0

obj =  
    {first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:  null}

strCount(obj)



// let result = 0
// Object.values(obj).forEach(el => {
//     console.log(el)
//     if (Array.isArray(el)) {
//         console.log('arr')
//         el.forEach(elem => {
//             typeof elem == 'string' ? result++ : null
//         })
//     } else {
//         console.log('not arr')
//         typeof el == 'string' ? result++ : null
//     }
    
// })