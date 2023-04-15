function colourAssociation(array){
    const resArray = []
    array.forEach(element => {
        const obj = {}
        for (let i = 0; i < element.length-1; i++) {
            obj[element[i]] = element[i+1]
            // console.log(obj)
        }
        resArray.push(obj)
    });
    console.log(resArray)
  }

  array = [['white','sadf'],['sdfsdf','sdfsdfsdf']]
  colourAssociation(array)