function maxTriSum(numbers){
    const resultArr = []
    numbers.forEach(element => {
        if (!resultArr.includes(element) ){
            resultArr.push(element)
            console.log(element)
        }
    });
    resultArr.sort((a,b) => a-b).reverse()
    let result = 0
    for(let i = 0; i<3;i++) {
        result+=resultArr[i]
    }
    return result
  }

  maxTriSum([3,2,6,8,2,3])