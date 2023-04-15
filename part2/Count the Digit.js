function nbDig(n, d) {
    result = 0
    for (let k = 0; k<= n; k++) {
        let square = k*k
        if (square.toString().split('').filter( (item) => item == d).length > 0) {
            result = result + square.toString().split('').filter( (item) => item == d).length
            console.log(result)
        }
    }
    // m = 0
    // console.log(m.toString().split('').filter( (item) => item == d).length)
    // console.log(result)
  }

  let n = 5750
  let d = 0
  nbDig(n, d)