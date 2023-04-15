function toBinary(n){
    let k = ''
    while (n > 0) {
        k = `${n%2}` + k
        n = Math.floor(n/2)
    }
    console.log(`${k}`)
    return Number(k);
  }

toBinary(7)