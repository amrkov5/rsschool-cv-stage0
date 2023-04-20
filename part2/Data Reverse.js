function dataReverse(data) {
    let reversed = []
    // for (let i = 0; i < data.length; i++) {
    //     reversed.unshift(data[i])
    // }
    let l = data.length/8
    let k = 8
    for(let i = 0; i<data.length; i++) {
        console.log(i)
        reversed = reversed.concat(data.splice(data.length-k,8))
        // k+=8
    }
    // reversed = reversed.concat(data.slice(0,8))
    // console.log(data.slice(0,8))
    // let k = 7
    // for (let i = 7; i<=32; i--) {
    //     reversed.unshift(data[i])
    //     k++
    //     if (k == 8) {
    //         i+=15
    //     }
    // }
    console.log(reversed)
  }

  data = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

  dataReverse(data)