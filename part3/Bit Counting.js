var countBits = function(n) {
    result = 0
    while (n>0) {
        if (n%2 == 1) {
            result++
        }
        n = Math.floor(n/2)
    }
    console.log(result)
  };

  countBits(4)