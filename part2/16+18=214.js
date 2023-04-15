function add(num1, num2) {
    const n1 = num1.toString().split('')
    const num1Arr = []
    n1.forEach(element => num1Arr.push(Number(element)));
    const n2 = num2.toString().split('')
    const num2Arr = []
    n2.forEach(element => num2Arr.push(Number(element)));
    let count = Math.max(num1Arr.length, num2Arr.length)
    const minElem = Math.min(num1Arr.length, num2Arr.length)
    resArray = []
    num1Arr.reverse()
    num2Arr.reverse()
    for (let i=0; i < count; i++) {
        if (num1Arr.length > 0 && num2Arr.length > 0) {
            resArray.unshift(Number(num1Arr.splice(0,1)) + Number(num2Arr.splice(0,1)))
        } else if (num1Arr.length === 0) {
            resArray.unshift(Number(num2Arr.splice(0,1)))
        } else (resArray.unshift(Number(num1Arr.splice(0,1))))
    }
    return(Number(resArray.join('')))
  }