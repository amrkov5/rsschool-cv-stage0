function rgb(r, g, b){
    let result = ''
    for (let i = 0; i<arguments.length; i++) {
        if(arguments[i] > 255) arguments[i] = 255
        if(arguments[i] < 0) arguments[i] = 0
        if(arguments[i].toString(16).length === 1) result +='0' + arguments[i].toString(16)
        else result += arguments[i].toString(16)
    }
    return result.toUpperCase()
  }

  console.log(rgb(0,255,300))