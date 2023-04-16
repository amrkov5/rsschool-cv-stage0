function getDecimal(n){
    n < 0 ? n = (n * -1) : null;
    console.log(n - Math.floor(n))
    return n - Math.floor(n) // fix me 
  }

  getDecimal(1.2)
