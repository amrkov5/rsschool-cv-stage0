var ArrowFunc = function(arr) {
    return arr.map( el => {String.fromCharCode(el)}).join(''); //Complete this function
  }

  arr = [84,101,115,116]
  console.log(arr.map(el => String.fromCharCode(el)))
  a = 84
  console.log(String.fromCharCode(a))