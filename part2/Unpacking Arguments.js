function spread(func, args) {
    console.log(func(...args))
  }

spread(function(x,y){return x+y}, [1,2])