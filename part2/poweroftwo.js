function isPowerOfTwo(n){
    let i = 0
    result = 0
    while (Math.pow(2,i) <= n) {
        result = Math.pow(2,i)
        i++
        console.log(result)
    }
    if (result == n && result !== 0) {
        return true
    } else return false
  }

  isPowerOfTwo(2)