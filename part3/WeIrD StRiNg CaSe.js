function toWeirdCase(string){
    let result = []
    console.log(string.split(' '))
    string.split(' ').forEach(element => {
        let modifiedStr = ''
        for (let i = 0; i<element.length; i++) {
            if (i%2 == 0) {modifiedStr += element[i].toUpperCase()}
            else modifiedStr += element[i].toLowerCase()
        } 
        result.push(modifiedStr)
    });
    return result.join(' ')
  }


string = 'This is a test'
console.log(toWeirdCase(string))